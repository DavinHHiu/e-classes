import classNames from 'classnames/bind';
import { useState } from 'react';

import background from '~/assets/images/backLogin.jpg';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);

function Login() {
    const [register, setRegister] = useState(false);
    const forwardRegister = () => {
        setRegister(true);
    };
    
    return (
        <div className={cx('wrapper')}>
            <img className={cx('background')} src={background} alt="" />
            {register || <LoginForm forwardRegister={forwardRegister} />}
            {register && <RegisterForm />}
        </div>
    );
}

export default Login;
