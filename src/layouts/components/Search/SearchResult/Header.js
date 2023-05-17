import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return <div className={cx('header')}>
        <span className={cx('header-title')}>LỚP HỌC</span>
        <Link className={cx('more')} to="">Xem thêm</Link>
    </div>;
}

export default Header;
