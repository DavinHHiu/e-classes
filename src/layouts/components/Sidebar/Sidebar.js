import { faChalkboardTeacher, faHome, faSchool } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'

import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import styles from './Sidebar.module.scss'
import config from '~/config';

const cx = classNames.bind(styles);
function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="Home" icon={faHome} to={config.path.home}></MenuItem>
            <MenuItem title="Classes" icon={faSchool} to={config.path.classes}></MenuItem>
            <MenuItem title="My classes" icon={faChalkboardTeacher } to={config.path.myclasses}></MenuItem>
        </Menu>
    </aside>;
}

export default Sidebar;
