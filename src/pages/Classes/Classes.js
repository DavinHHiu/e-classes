import classNames from 'classnames/bind';
import { useContext, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

import request from '~/utils/request';
import ListItem from '../components/ListItem/ListItem';
import styles from './Classes.module.scss';
import { UserContext } from '~/App';

const cx = classNames.bind(styles);

function Classes() {
    const [courseIds, setCourseIds] = useState([]);
    const [courses, setCourses] = useState([]);
    const user = useContext(UserContext);

    useEffect(() => {
        request.get('/courses').then((res) => setCourses(res.data));
        request.get('users/1').then((res) => setCourseIds(res.data.courseJoinIds));
    }, []);

    const courseList = courses.filter((course) => courseIds.includes(course.id));

    return (
        <>
            {!!localStorage.getItem('user') || <Navigate to="/login" />}
            {user && (
                <UserContext.Provider value={user}>
                    <div className={cx('wrapper')}>
                        <ListItem courseList={courseList} title="Lớp học của tôi" />
                    </div>
                </UserContext.Provider>
            )}
        </>
    );
}

export default Classes;
