import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, icon, to }) {
    return (
        <NavLink className={(nav) => (cx('menu-item', {active : nav.isActive}))} to={to}>
            <FontAwesomeIcon className={cx('icon')} icon={icon} />
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
