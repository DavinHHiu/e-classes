import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Button from '../Button/Button';
import styles from './CourseItem.module.scss';

const cx = classNames.bind(styles);

function CourseItem({ src, alt, title, studentsCount, className }) {
    return (
        <div className={cx('wrapper', className)}>
            <Button 
                className={cx('poster')}
                to="/"
                style={{backgroundImage: `url(${src})`}}
            >
                <Button className={cx('join-btn')} >Xem khóa học</Button>
            </Button>
            {/* <img className={cx('poster')} src={src} alt={alt} /> */}
            <span className={cx('title')}>{title}</span>
            <div className={cx('students-count')}>
                <FontAwesomeIcon className={cx('icon')} icon={faUsers} />
                <span className={cx('count')}>{studentsCount}</span>
            </div>
        </div>
    );
}

export default CourseItem;
