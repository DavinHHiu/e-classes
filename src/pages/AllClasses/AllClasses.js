import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import request from '~/utils/request';
import Button from '~/components/Button/Button';
import styles from './AllClasses.module.scss';

const cx = classNames.bind(styles);

function AllClasses() {
    const [courses, setCourses] = useState();
    const [pages, setPages] = useState();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const [page, setPage] = useState(searchParams.get('page'));

    useEffect(() => {
        request.get('courses').then((res) => {
            const count = Math.floor(res.data.length / 10 + 1);
            const pages = [];
            for (let i = 0; i < count; i++) {
                pages.push(i + 1);
            }
            setPages(pages);
        });
    }, []);

    useEffect(() => {
        request.get(`courses?_page=${page}&_limit=10`).then((res) => setCourses(res.data));
    }, [page]);

    const handleChangePage = (e) => {
        const urlObj = new URL(window.location.href);
        const searchParams = new URLSearchParams(urlObj.search);
        searchParams.set('page', e.target.textContent);
        urlObj.search = searchParams.toString();
        window.history.replaceState(null, '', urlObj.toString());
        setPage(e.target.textContent);
        window.scrollTo(0, 0);
    };

    return (
        <div className={cx('wrapper')}>
            {courses &&
                courses.map((course) => (
                    <div key={course.id} className={cx('course-result')}>
                        <div className={cx('info')}>
                            <h3 className={cx('title')}>{course.name}</h3>
                            <p className={cx('description')}>{course.description}</p>
                            <span className="props">
                                <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                                <span className={cx('students')}>{course.studentsCount}</span>
                            </span>
                        </div>
                        <Button
                            className={cx('poster')}
                            to="/"
                            style={{ backgroundImage: `url(${course.poster})` }}
                        ></Button>
                    </div>
                ))}
            <div className={cx('pages')}>
                {pages &&
                    pages.map((page) => {
                        return (
                            <div
                                key={page}
                                className={cx('page', {
                                    active: page.toString() === new URLSearchParams(window.location.search).get('page'),
                                })}
                                onClick={handleChangePage}
                            >
                                {page}
                            </div>
                        );
                    })}
            </div>
        </div>
    );
}

export default AllClasses;
