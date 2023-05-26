import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import request from '~/utils/request';
import ListItem from '../components/ListItem/ListItem';
import styles from './Classes.module.scss';

const cx = classNames.bind(styles);

function Classes() {
    const [courses, setCourses] = useState([]);
    let courseJoinList = [];
    let courseManageList = [];
    const courseJoinIds = JSON.parse(localStorage.getItem('user')).courseJoinIds;
    const courseManageIds = JSON.parse(localStorage.getItem('user')).courseManageIds;

    useEffect(() => {
        request.get('/courses').then((res) => setCourses(res.data));
    }, []);

    courses.forEach((course) => {
        if (courseJoinIds.includes(course.id)) {
            courseJoinList.push(course);
        } else if (courseManageIds.includes(course.id)) {
            courseManageList.push(course);
        }
    });

    return (
        <>
            {!!localStorage.getItem('user') || <Navigate to="/login" />}
            <div className={cx('wrapper')}>
                <ListItem
                    courseList={useLocation().pathname === '/classes' ? courseJoinList : courseManageList}
                    title="Lớp học của tôi"
                />
            </div>
        </>
    );
}

export default Classes;
