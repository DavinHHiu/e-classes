import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './SearchResult.module.scss';
import { useContext } from 'react';
import { UserContext } from '~/App';

const cx = classNames.bind(styles);

function ResultItem({ poster, name, courseId }) {
    let path = `/course/${courseId}`;
    const courseIds = useContext(UserContext).courseJoinIds;
    if(courseIds.includes(courseId)) {
        path = `/learning/notification/${courseId}`
    }

    return (
        <Link to={path} className={cx('result-item')}>
            <img className={cx('result-avatar')} src={poster} alt={name} />
            <span className={cx('result-name')}>{name}</span>
        </Link>
    );
}

export default ResultItem;
