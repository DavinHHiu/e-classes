import classNames from 'classnames/bind';

import logo from '~/assets/images/e-classes-logo.png';
import Button from '~/components/Button/Button';
import styles from './Login.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const initialFormValue = {
    name: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
};

function RegisterForm() {
    const [formValue, setFormValue] = useState(initialFormValue);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormValue({
            ...formValue,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formValue);
    }

    return (
        <div className={cx('form-container')}>
            <div className={cx('header')}>
                <span className={cx('logo-container')}>
                    <img className={cx('logo')} src={logo} alt="logo" />
                </span>
                <span className={cx('title')}>Đăng ký</span>
            </div>
            <form className={cx('form')} onSubmit={handleSubmit}>
                <div className={cx('form-item')}>
                    <label htmlFor="name" className={cx('form-label')}>
                        Họ và tên
                    </label>
                    <input
                        type="text"
                        name="name"
                        className={cx('form-input')}
                        value={formValue.name}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('form-item')}>
                    <label htmlFor="email" className={cx('form-label')}>
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        className={cx('form-input')}
                        value={formValue.email}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('form-item')}>
                    <label htmlFor="userName" className={cx('form-label')}>
                        Tên tài khoản
                    </label>
                    <input
                        type="text"
                        name="userName"
                        className={cx('form-input')}
                        value={formValue.userName}
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
                        value={formValue.password}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('form-item')}>
                    <label htmlFor="confirmPassword" className={cx('form-label')}>
                        Nhập lại mật khẩu
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        className={cx('form-input')}
                        value={formValue.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <div className={cx('button')}>
                    <Button primary className={cx('submit-btn')}>
                        Đăng ký
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default RegisterForm;
