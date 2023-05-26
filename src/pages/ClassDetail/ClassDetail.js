import classNames from 'classnames/bind';
import { Navigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import request from '~/utils/request';
import Button from '~/components/Button/Button';
import styles from './ClassDetail.module.scss';

const cx = classNames.bind(styles);

function ClassDetail() {
    const [course, setCourse] = useState();
    const { id } = useParams();

    useEffect(() => {
        request.get(`courses/${encodeURIComponent(id)}`).then((res) => setCourse(res.data));
    }, [id]);
    return (
        course && (
            <div className={cx('wrapper')}>
                {!!localStorage.getItem('user') || <Navigate to="/login" />}

                <div className={cx('course-info')}>
                    <h1 className={cx('name')}>{course.name}</h1>
                    <span className={cx('description')}>{course.description}</span>
                </div>
                <div className={cx('course-poster')}>
                    <div className={cx('course-poster-detail')}>
                        <div className={cx('poster')} style={{ backgroundImage: `url(${course.poster})` }}></div>
                        <h1 className={cx('cost')}>Miễn phí</h1>
                        <Button primary className={cx('register-btn')}>
                            Đăng ký học
                        </Button>
                    </div>
                </div>
            </div>
        )
    );
}

export default ClassDetail;
