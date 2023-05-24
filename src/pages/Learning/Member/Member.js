import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Member.module.scss';
import request from '~/utils/request';

const cx = classNames.bind(styles);

function Member({ course }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        request.get('users').then((res) => {
            setUsers(res.data);
        });
    }, []);

    const students = users.filter((user) => course.studentIds.includes(user.id));

    return (
        students && (
            <div className={cx('wrapper')}>
                <div className={cx('title-box')}>
                    <h2 className={cx('title')}>Giáo viên</h2>
                </div>
                <div className={cx('user')}>
                    <span className={cx('avatar-box')}>
                        <img
                            className={cx('avatar')}
                            src="https://lh3.googleusercontent.com/a/default-user=s32-c"
                            alt=""
                        />
                    </span>
                    <span className={cx('name')}>{course.userManagerId}</span>
                </div>

                <div className={cx('title-box', 'students-title')}>
                    <h2 className={cx('title')}>Bạn học</h2>
                    <strong className={cx('students')}>{course.studentsCount} Sinh viên</strong>
                </div>
                {students.map((student) => (
                    <div key={student.id} className={cx('user')}>
                        <span className={cx('avatar-box')}>
                            <img className={cx('avatar')} src={student.avatar} alt="" />
                        </span>
                        <span className={cx('name')}>{student.name}</span>
                    </div>
                ))}
            </div>
        )
    );
}

export default Member;
