import classNames from 'classnames/bind';
import { NavLink, Navigate, useLocation, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

import request from '~/utils/request';
import { UserContext } from '~/App';
import Notification from './Notification/Notification';
import Assignment from './Assignment/Assignment';
import Member from './Member/Member';
import styles from './Learning.module.scss';

const cx = classNames.bind(styles);

function Learning() {
    const { id } = useParams();
    const location = useLocation();
    const user = useContext(UserContext);

    const pathNotification = `/learning/notification/${id}`;
    const pathAssignment = `/learning/assignment/${id}`;
    const pathMember = `/learning/member/${id}`;

    const [course, setCourse] = useState();

    useEffect(() => {
        request.get(`courses/${encodeURIComponent(id)}`).then((res) => setCourse(res.data));
    }, [id]);

    return (
        <>
            {!!localStorage.getItem('user') || <Navigate to="/login" />}
            {course && user && (
                <div className={cx('wrapper')}>
                    <span className={cx('course-name')}>{course.name}</span>
                    <div className={cx('background-poster')} style={{ backgroundImage: `url(${course.poster})` }}></div>
                    <div className={cx('content')}>
                        <ul className={cx('tab-list')}>
                            <li>
                                <NavLink
                                    to={pathNotification}
                                    className={(nav) => cx('tab-item', { active: nav.isActive })}
                                >
                                    Bảng tin
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to={pathAssignment}
                                    className={(nav) => cx('tab-item', { active: nav.isActive })}
                                >
                                    Bài tập trên lớp
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={pathMember} className={(nav) => cx('tab-item', { active: nav.isActive })}>
                                    Mọi người
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    {location.pathname.startsWith('/learning/notification') && <Notification avatar={user.avatar} />}
                    {location.pathname.startsWith('/learning/assignment') && (
                        <Assignment exercises={course.exercises} />
                    )}
                    {location.pathname.startsWith('/learning/member') && <Member course={course} />}
                </div>
            )}
        </>
    );
}

export default Learning;
