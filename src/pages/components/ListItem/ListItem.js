import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router-dom';

import Button from '~/components/Button/Button';
import CourseItem from '~/components/CourseItem/CourseItem';
import styles from './ListItem.module.scss';

const cx = classNames.bind(styles);

function ListItem({ courseList, title }) {
    return (
        <section className={cx('free-classes')}>
            <div className={cx('header')}>
                <span className={cx('title')}>{title}</span>
                {useLocation().pathname === '/' && <Button
                    className={cx('more')}
                    rightIcon={<FontAwesomeIcon className={cx('more-icon')} icon={faChevronRight} />}
                    more
                    to="/allclasses?page=1"
                >
                    Xem tất cả
                </Button>}
            </div>
            <div className={cx('course-items')}>
                {courseList &&
                    courseList.map((course) => (
                        <CourseItem
                            key={course.id}
                            className={cx('course-item')}
                            courseId={course.id}
                            src={course.poster}
                            title={course.name}
                            studentsCount={course.studentsCount}
                        />
                    ))}
            </div>
        </section>
    );
}

export default ListItem;
