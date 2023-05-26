import classNames from 'classnames/bind';
import { useLocation } from 'react-router-dom';

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                {!useLocation().pathname.startsWith('/learning') && <Sidebar />}
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

export default MainLayout;
