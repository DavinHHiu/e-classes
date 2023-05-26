import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import request from '~/utils/request';
import ListItem from '../components/ListItem/ListItem';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    const [courseList, setCourseList] = useState();
    const [privateCourses, setPrivateCourses] = useState();

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
        request
            .get('privateCourses', {
                params: {
                    _limit: 20,
                },
            })
            .then((res) => setPrivateCourses(res.data));
    }, []);

    return (
        <div className={cx('wrapper')}>
            {!!localStorage.getItem('user') || <Navigate to="/login" />}
            <ListItem courseList={courseList} title="Lớp học công khai" />
            {courseList && <ListItem courseList={privateCourses} title="Lớp học riêng tư" />}
        </div>
    );
}

export default Home;
