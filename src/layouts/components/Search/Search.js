import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
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
        <div className={cx('search')}>
            <button className={cx('search-btn')} >
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
            {searchValue && <button className={cx('clear-btn')} onClick={handleClick}>
                <FontAwesomeIcon icon={faXmark} />
            </button>}
        </div>
    );
}

export default Search;
