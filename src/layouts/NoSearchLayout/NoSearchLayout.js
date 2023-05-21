import classNames from 'classnames/bind';

import { HeaderNoSearch } from '../components/HeaderNoSearch';
import Sidebar from '../components/Sidebar';
import styles from '../MainLayout/MainLayout.module.scss';

const cx = classNames.bind(styles);

function NoSearchLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <HeaderNoSearch />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default NoSearchLayout;
