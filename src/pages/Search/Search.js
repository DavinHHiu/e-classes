import classNames from 'classnames/bind';
import { NavLink, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

import request from '~/utils/request';
import { useDebounce } from '~/hooks';
import Button from '~/components/Button/Button';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const location = useLocation();

    let params = new URLSearchParams(location.search);

    const [searchValue, setSearchValue] = useState(params.get('q') || '');
    const [searchResult, setSearchResult] = useState([]);
    const [loading, setLoading] = useState(false);
    const [noInput, setNoInput] = useState(false);

    const debounced = useDebounce(searchValue, 800);

    const urlObj = new URL(window.location.href);
    const searchParams = new URLSearchParams(urlObj.search);
    searchParams.set('q', debounced);
    urlObj.search = searchParams.toString();
    const newUrl = urlObj.toString();
    window.history.replaceState(null, '', newUrl);

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            setNoInput(true);
            return;
        }
        setLoading(true);

        request
            .get(`courses`, {
                params: {
                    name_like: searchValue,
                    _limit: 10,
                },
            })
            .then((res) => {
                setSearchResult(res.data);
                setLoading(false);
                setNoInput(false);
            })
            .catch(() => setLoading(false));
    }, [debounced]);

    function handleSearch(e) {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(e.target.value);
            params.set('q', searchValue);
        }
    }

    return (
        <>
            {!!localStorage.getItem('user') || <Navigate to="/login" />}
            <div className={cx('wrapper')}>
                <input
                    placeholder="Tìm kiếm..."
                    value={searchValue}
                    className={cx('input', { noInput })}
                    spellCheck={false}
                    onChange={handleSearch}
                ></input>
                {noInput || (
                    <div className={cx('result-container')}>
                        <div className={cx('header-tabs')}>
                            <ul className={cx('tab-list')}>
                                <li>
                                    <NavLink
                                        className={(nav) => cx('tab-list-item', { active: nav.isActive })}
                                        to="/search"
                                    >
                                        Lớp học
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('separator')}></div>
                        {searchResult.length <= 0 && (
                            <span className={cx('not-found')}>Chưa có kết quả nào phù hợp</span>
                        )}
                        {loading && <span className={cx('loading')}>Đang tìm kiếm...</span>}
                        {loading || (
                            <div className={cx('courses-content')}>
                                {searchResult &&
                                    searchResult.map((course) => (
                                        <div key={course.id} className={cx('course-result')}>
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
                        )}
                    </div>
                )}
            </div>
        </>
    );
}

export default Search;
