import classNames from 'classnames/bind';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import backgroundSide from '~/assets/images/backPopup.jpg';
import welcome from '~/assets/images/welcome.jpg';
import request from '~/utils/request';
import Button from '~/components/Button/Button';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';
import styles from './ClassDetail.module.scss';

const cx = classNames.bind(styles);

function ClassDetail() {
    const [showPopup, setShowPopup] = useState(false);
    const [code, setCode] = useState('');
    const [error, setError] = useState(false);
    const [course, setCourse] = useState();
    const { id } = useParams();
    const user = JSON.parse(localStorage.getItem('user'));
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.stopPropagation();
        setShowPopup(!showPopup);
    };

    const handleJoinClass = () => {
        console.log(JSON.parse(localStorage.getItem('user')));
        console.log(course);
        const updateUser = {
            ...user,
            courseJoinIds: [...user.courseJoinIds, course.id],
        };
        request.patch(`courses/${course.id}`, {
            ...course,
            studentIds: [...course.studentIds, user.id],
        });
        request.patch(`users/${user.id}`, updateUser);
        localStorage.setItem('user', JSON.stringify(updateUser));
        navigate(`/learning/notification/${course.id}`);
    };

    const handleCancel = () => {
        setShowPopup(!showPopup);
    };

    const handleSubmit = () => {
        if (course) {
            if (course.code !== code) {
                setError(true);
            } else {
                setError(false);
                handleJoinClass();
            }
        }
    };

    const handleCodeInput = (e) => {
        const codeValue = e.target.value;
        if (codeValue.length > 0 && codeValue[codeValue.length - 1] === ' ') {
            return;
        }
        setCode(codeValue.substring(0, 6));
    };

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.keyCode === 27) {
                setShowPopup(false);
            }
        };
        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, []);

    useEffect(() => {
        request.get(`courses/${encodeURIComponent(id)}`).then((res) => setCourse(res.data));
    }, [id]);

    return (
        course && (
            <>
                <div className={cx('wrapper')}>
                    {!!localStorage.getItem('user') || <Navigate to="/login" />}

                    <div className={cx('course-info')}>
                        <h1 className={cx('name')}>{course.name}</h1>
                        <span className={cx('description')}>{course.description}</span>
                    </div>
                    <div className={cx('course-poster')}>
                        <div className={cx('course-poster-detail')}>
                            <div className={cx('poster')} style={{ backgroundImage: `url(${course.poster})` }}></div>
                            <Button primary className={cx('register-btn')} onClick={handleRegister}>
                                Đăng ký học
                            </Button>
                        </div>
                    </div>
                </div>

                {showPopup && !course.code && (
                    <div className={cx('background')}>
                        <PopperWrapper className={cx('pop-up')}>
                            <img className={cx('background-side')} src={backgroundSide} alt="Background side" />
                            <div className={cx('code-side')}>
                                <img className={cx('welcome')} src={welcome} alt="" />
                                <h3 className={cx('pop-up-title')}>Nhập mã lớp</h3>
                                <input
                                    value={code}
                                    autoFocus
                                    className={cx('pop-up-input')}
                                    onChange={handleCodeInput}
                                />
                                {error && <span className={cx('error')}>Sai mã lớp, vui lòng nhập lại!</span>}
                                <div className={cx('pop-up-btn')}>
                                    <Button className={cx('discard')} onClick={handleCancel}>
                                        Hủy
                                    </Button>
                                    <Button className={cx('submit')} onClick={handleSubmit}>
                                        Đăng ký
                                    </Button>
                                </div>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
            </>
        )
    );
}

export default ClassDetail;
