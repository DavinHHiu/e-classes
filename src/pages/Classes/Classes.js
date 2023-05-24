import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import request from '~/utils/request';
import ListItem from '../components/ListItem/ListItem';
import styles from './Classes.module.scss';

const cx = classNames.bind(styles);

function Classes() {
    const [courseIds, setCourseIds] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        request.get('/courses').then((res) => setCourses(res.data));
        request.get('users/1').then((res) => setCourseIds(res.data.courseJoinIds));
    }, []);

    const courseList = courses.filter((course) => courseIds.includes(course.id));

    return (
        <div className={cx('wrapper')}>
            {!!localStorage.getItem('user') || <Navigate to="/" />}
            <ListItem courseList={courseList} title="Lớp học của tôi" />
        </div>
    );
}

export default Classes;
