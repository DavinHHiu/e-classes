import classNames from 'classnames/bind';
import { useContext } from 'react';

import { UserContext } from '~/App';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';
import styles from './UserMenu.module.scss';

const cx = classNames.bind(styles);

function UserMenu() {
    const user = useContext(UserContext);

    return (
        user && (
            <div className={cx('wrapper')}>
                <PopperWrapper className={cx('menu-wrapper')}>
                    <div className={cx('user')}>
                        <img className={cx('avatar')} src={user.avatar} alt="avatar" />
                        <div className={cx('user-info')}>
                            <strong className={cx('full-name')}>{user.name}</strong>
                            <span className={cx('user-name')}>@{user.userName}</span>
                        </div>
                    </div>
                    <hr />
                    <ul className={cx('list')}>
                        <li>
                            <a className={cx('item')} href="/">
                                Trang cá nhân
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <ul className={cx('list')}>
                        <li>
                            <a className={cx('item')} href="/">
                                Cài đặt
                            </a>
                        </li>
                        <li>
                            <a className={cx('item')} href="/login">
                                Đăng xuất
                            </a>
                        </li>
                    </ul>
                </PopperWrapper>
            </div>
        )
    );
}

export default UserMenu;
