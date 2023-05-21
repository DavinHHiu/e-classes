import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import request from '~/utils/request';
import { useDebounce } from '~/hooks';
import SearchReSult from './SearchResult/SearchResult';
import PopperWrapper from '~/components/PopperWrapper';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ className }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [showSearchResult, setShowSearchResult] = useState(false);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 800);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            setShowSearchResult(false);
            return;
        }

        setLoading(true);
        request
            .get('courses', {
                params: {
                    name_like: searchValue,
                    _limit: 8,
                },
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
                if (res.length <= 0) setShowSearchResult(false);
                else setShowSearchResult(true);
            })
            .catch(() => setLoading(false));
    }, [debounced]);

    const handleOnChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
        }
    };

    const handleClear = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    return (
        <div>
            <Tippy
                visible={showResult && searchValue}
                interactive
                placement="bottom"
                render={() => (
                    <div className={cx('search-results')}>
                        <PopperWrapper className={cx('search-wrapper')}>
                            <div className={cx('search-filter')}>
                                {!loading && <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />}
                                {!loading && <span className={cx('input-value')}>Kết quả cho '{searchValue}'</span>}
                                {loading && <FontAwesomeIcon className={cx('icon-loading')} icon={faSpinner} />}
                                {loading && <span className={cx('input-value')}>Tìm '{searchValue}'</span>}
                                {/* {showSearchResult || <span className={cx('input-value')}>Không có kết quả cho '{searchValue}'</span>} */}
                            </div>
                            {showSearchResult && <SearchReSult result={searchResult} />}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search', className)}>
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
                    </button>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        className={cx('search-input')}
                        placeholder="Tìm kiếm lớp học, giảng viên, ..."
                        spellCheck={false}
                        onChange={handleOnChange}
                        onFocus={() => setShowResult(true)}
                    ></input>
                    {!!searchValue && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faXmark} />
                        </button>
                    )}
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
