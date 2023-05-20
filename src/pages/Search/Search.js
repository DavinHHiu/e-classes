import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './Search.module.scss';
import Button from '~/components/Button/Button';

const cx = classNames.bind(styles);

function Search() {
    return (
        <div className={cx('wrapper')}>
            <input className={cx('input')} contentedEditable={true} spellcheck={false}></input>
            <div className={cx('result-container')}>
                <div className={cx('header-tabs')}>
                    <ul className={cx('tab-list')}>
                        <li>
                            <NavLink className={(nav) => cx('tab-list-item', { active: nav.isActive })} to="/search">
                                Lớp học
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(nav) => cx('tab-list-item', { active: nav.isActive })}
                                to="/search/post"
                            >
                                Lớp học
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={(nav) => cx('tab-list-item', { active: nav.isActive })}
                                to="/search/video"
                            >
                                Lớp học
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className={cx('courses-content')}>
                    <div className={cx('course-result')}>
                        <Button
                            className={cx('poster')}
                            to="/"
                            style={{ backgroundImage: `url(https://files.fullstack.edu.vn/f8-prod/courses/2.png)` }}
                        ></Button>
                        <div className={cx('info')}>
                            <h3 className={cx('title')}>HTML CSS từ Zero đến Hero</h3>
                            <p className={cx('description')}>
                                Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee
                            </p>
                        </div>
                    </div>
                    <div className={cx('course-result')}>
                        <Button
                            className={cx('poster')}
                            to="/"
                            style={{ backgroundImage: `url(https://files.fullstack.edu.vn/f8-prod/courses/2.png)` }}
                        ></Button>
                        <div className={cx('info')}>
                            <h3 className={cx('title')}>HTML CSS từ Zero đến Hero</h3>
                            <p className={cx('description')}>
                                Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee
                            </p>
                        </div>
                    </div>
                    <div className={cx('course-result')}>
                        <Button
                            className={cx('poster')}
                            to="/"
                            style={{ backgroundImage: `url(https://files.fullstack.edu.vn/f8-prod/courses/2.png)` }}
                        ></Button>
                        <div className={cx('info')}>
                            <h3 className={cx('title')}>HTML CSS từ Zero đến Hero</h3>
                            <p className={cx('description')}>
                                Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}

export default Search;
