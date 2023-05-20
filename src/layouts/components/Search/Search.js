import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import PopperWrapper from '~/components/PopperWrapper';
import SearchReSult from './SearchResult/SearchResult';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ className }) {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);
    const [dataAPI, setDataAPI] = useState([]);

    const inputRef = useRef();

    useEffect(() => {
        fetch(`http://localhost:3004/courses`)
            .then((res) => res.json())
            .then((res) => {
                setDataAPI(res);
            });
    }, []);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        // eslint-disable-next-line no-lone-blocks
        {
            dataAPI &&
                setSearchResult(
                    dataAPI.filter((item) => item.name.toUpperCase().includes(searchValue.toUpperCase())),
                );
        }

        setLoading(false);
    }, [searchValue]);

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
                visible={showResult && searchResult.length > 0}
                interactive
                placement="bottom"
                render={() => (
                    <div className={cx('search-results')}>
                        <PopperWrapper className={cx('search-wrapper')}>
                            <div className={cx('search-filter')}>
                                {!loading && <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />}
                                {loading && <FontAwesomeIcon className={cx('icon-loading')} icon={faSpinner} />}
                                <span className={cx('input-value')}>Kết quả cho '{searchValue}'</span>
                            </div>
                            <SearchReSult result={searchResult} />
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
