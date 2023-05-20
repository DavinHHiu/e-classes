import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Button from '~/components/Button/Button';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [courseList, setCourseList] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [noInput, setNoInput] = useState(false);

    useEffect(() => {
        fetch('http://localhost:3004/courses')
            .then((res) => res.json())
            .then((res) => {
                setCourseList(res);
            });
    }, []);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            setNoInput(true)
            return;
        }
        // eslint-disable-next-line no-lone-blocks
        {
            courseList &&
                setSearchResult(
                    courseList.filter((item) => item.name.toUpperCase().includes(searchValue.toUpperCase())),
                );
        }
    }, [searchValue]);
    function handleSearch(e) {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
            setNoInput(false);
        }
    }

    return (
        <div className={cx('wrapper')}>
            <input placeholder='Tìm kiếm...' value={searchValue} className={cx('input', {noInput})} spellCheck={false} onChange={handleSearch}></input>
            {noInput || <div className={cx('result-container')}>
                <div className={cx('header-tabs')}>
                    <ul className={cx('tab-list')}>
                        <li>
                            <NavLink className={(nav) => cx('tab-list-item', { active: nav.isActive })} to="/search">
                                Lớp học
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={cx('separator')}></div>
                <div className={cx('courses-content')}>
                    {searchResult &&
                        searchResult.map((course) => (
                            <div className={cx('course-result')}>
                                <Button
                                    className={cx('poster')}
                                    to="/"
                                    style={{ backgroundImage: `url(${course.poster})` }}
                                ></Button>
                                <div className={cx('info')}>
                                    <h3 className={cx('title')}>{course.name}</h3>
                                    <p className={cx('description')}>{course.description}</p>
                                </div>
                            </div>
                        ))}
                </div>
            </div>}
        </div>
    );
}

export default Search;
