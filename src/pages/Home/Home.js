import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import request from '~/utils/request';
import Button from '~/components/Button/Button';
import CourseItem from '~/components/CourseItem/CourseItem';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [courseList, setCourseList] = useState([]);


    useEffect(() => {
        request
            .get('courses', {
                params: {
                    _limit: 20,
                },
            })
            .then((res) => {
                setCourseList(res.data);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <section className={cx('free-classes')}>
                <div className={cx('header')}>
                    <span className={cx('title')}>Lớp học miễn phí</span>
                    <Button
                        className={cx('more')}
                        rightIcon={<FontAwesomeIcon className={cx('more-icon')} icon={faChevronRight} />}
                        more
                        to=""
                    >
                        Xem tất cả
                    </Button>
                </div>
                <div className={cx('course-items')}>
                    {courseList &&
                        courseList.map((course) => (
                            <CourseItem
                                key={course.id}
                                className={cx('course-item')}
                                src={course.poster}
                                title={course.name}
                                studentsCount={course.studentsCount}
                            />
                        ))}
                </div>
            </section>
        </div>
    );
}

export default Home;
