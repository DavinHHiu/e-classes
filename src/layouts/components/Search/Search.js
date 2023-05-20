import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import PopperWrapper from '~/components/PopperWrapper';
import SearchReSult from './SearchResult/SearchResult';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search({ className }) {
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();

    const handleOnChange = (e) => {
        setSearchValue(e.target.value);
    };

    const handleClick = () => {
        setSearchValue('');
        inputRef.current.focus();
    };

    return (
        <Tippy
            interactive
            placement="bottom"
            render={() => (
                <div className={cx('search-results')}>
                    <PopperWrapper className={cx('search-wrapper')}>
                        <div className={cx('search-filter')}>
                            <FontAwesomeIcon className={cx('icon-search')} icon={faSearch} />
                            <span className={cx('input-value')}>Kết quả cho '{searchValue}'</span>
                        </div>
                        <SearchReSult />
                        <SearchReSult />
                        <SearchReSult />
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx('search', className)}>
                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </button>
                <input
                    ref={inputRef}
                    value={searchValue}
                    className={cx('search-input')}
                    placeholder="Tìm kiếm lớp học, giảng viên, ..."
                    spellCheck={false}
                    onChange={handleOnChange}
                ></input>
                {searchValue && (
                    <button className={cx('clear-btn')} onClick={handleClick}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                )}
            </div>
        </Tippy>
    );
}

export default Search;
