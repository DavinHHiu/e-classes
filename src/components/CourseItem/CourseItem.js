import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { useContext } from 'react';
import { UserContext } from '~/App';

import Button from '../Button/Button';
import styles from './CourseItem.module.scss';

const cx = classNames.bind(styles);

function CourseItem({ src, courseId, title, studentsCount, className }) {
    let courseIds;
    if (useContext(UserContext)) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        courseIds = useContext(UserContext).courseJoinIds;
    }
    let path = `/course/${courseId}`;

    if (courseIds && courseIds.includes(courseId)) path = `/learning/notification/${courseId}`;

    return (
        courseIds && (
            <div className={cx('wrapper', className)}>
                <Button className={cx('poster')} to={path} style={{ backgroundImage: `url(${src})` }}>
                    <Button className={cx('join-btn')}>
                        {courseIds.includes(courseId) ? 'Vào lớp học' : 'Xem khóa học'}
                    </Button>
                </Button>

                <span className={cx('title')}>{title}</span>
                <div className={cx('students-count')}>
                    <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                    <span className={cx('count')}>{studentsCount}</span>
                </div>
            </div>
        )
    );
}

export default CourseItem;
