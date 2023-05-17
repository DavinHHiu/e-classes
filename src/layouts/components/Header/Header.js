import classNames from 'classnames/bind';
import Search from '../Search/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('logo-container')}>
                <img
                    className={cx('logo')}
                    src="https://www.tadviser.ru/images/8/89/Expensify-app-logo.png"
                    alt="logo"
                />
                <span className={cx('slogan')}>Eclasses - Learning every moments</span>
            </div>
            <Search />
            <div className={cx('avatar-container')}>
                <img
                    className={cx('avatar')}
                    src="https://t3.ftcdn.net/jpg/05/70/71/06/360_F_570710660_Jana1ujcJyQTiT2rIzvfmyXzXamVcby8.jpg"
                    alt=""
                />
            </div>
        </header>
    );
}

export default Header;
