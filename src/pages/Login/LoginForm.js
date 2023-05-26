import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import request from '~/utils/request';
import logo from '~/assets/images/e-classes-logo.png';
import Button from '~/components/Button/Button';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

const initialUserLogin = {
    userName: '',
    password: '',
};

function LoginForm({ forwardRegister }) {
    const [userLogin, setUserLogin] = useState(JSON.parse(localStorage.getItem('user')) || initialUserLogin);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        request.get('users').then((res) => setUsers(res.data));
    }, []);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setUserLogin({
            ...userLogin,
            [name]: value,
        });
    };

    const handleSubmit = () => {
        const user = users.find((user) => user.userName === userLogin.userName);
        if (!user) {
            setError('Sai tài khoản hoặc mật khẩu');
        } else if (user.password !== userLogin.password) {
            setError('Sai tài khoản hoặc mật khẩu');
        } else {
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/');
        }
    };

    return (
        <div className={cx('form-container')}>
            <div className={cx('header')}>
                <span className={cx('logo-container')}>
                    <img className={cx('logo')} src={logo} alt="logo" />
                </span>
                <span className={cx('title')}>Đăng nhập</span>
            </div>

            <div className={cx('form')}>
                <div className={cx('form-item')}>
                    <label htmlFor="userName" className={cx('form-label')}>
                        Tên tài khoản
                    </label>
                    <input
                        type="text"
                        name="userName"
                        className={cx('form-input')}
                        value={userLogin.userName}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('form-item')}>
                    <label htmlFor="password" className={cx('form-label')}>
                        Mật khẩu
                    </label>
                    <input
                        type="password"
                        name="password"
                        className={cx('form-input')}
                        value={userLogin.password}
                        onChange={handleChange}
                    />
                </div>
                <span className={cx('message')}>{error}</span>

                <div className={cx('button')}>
                    <Button primary className={cx('submit-btn')} onClick={handleSubmit}>
                        Đăng nhập
                    </Button>
                </div>
            </div>
            <Button noColor className={cx('register-btn')} onClick={forwardRegister}>
                Đăng ký
            </Button>
        </div>
    );
}

export default LoginForm;
