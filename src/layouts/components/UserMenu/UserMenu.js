import classNames from 'classnames/bind';
import styles from './UserMenu.module.scss';
import PopperWrapper from '~/components/PopperWrapper/PopperWrapper';

const cx = classNames.bind(styles);

function UserMenu() {
    return (
        <div className={cx('wrapper')}>
            <PopperWrapper className={cx('menu-wrapper')}>
                <div className={cx('user')}>
                    <img
                        className={cx('avatar')}
                        src="https://t3.ftcdn.net/jpg/05/70/71/06/360_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg"
                        alt=""
                    />
                    <div className={cx('user-info')}>
                        <strong className={cx('full-name')}>Nguyen Hong Hieu</strong>
                        <span className={cx('user-name')}>@hieunguyenhong</span>
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
                            Viết blog
                        </a>
                    </li>
                    <li>
                        <a className={cx('item')} href="/">
                            Bài viết của tôi
                        </a>
                    </li>
                </ul>
                <hr />
                <ul className={cx('list')}>
                    <li>
                        <a className={cx('item')} href="/">
                            Bài viết đã lưu
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
                        <a className={cx('item')} href="/">
                            Đăng xuất
                        </a>
                    </li>
                </ul>
            </PopperWrapper>
        </div>
    );
}

export default UserMenu;
