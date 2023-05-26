import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { useContext } from 'react';
import { useLocation } from 'react-router-dom';

import { UserContext } from '~/App';
import logo from '~/assets/images/e-classes-logo.png';
import UserMenu from '../UserMenu/UserMenu';
import Search from '../Search/Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    let avatar;
    if (useContext(UserContext)) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        avatar = useContext(UserContext).avatar;
    }

    const location = useLocation();

    return (
        avatar && (
            <header className={cx('wrapper')}>
                <div className={cx('more-btn')}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                <div className={cx('logo-container')}>
                    <img className={cx('logo')} src={logo} alt="logo" />
                    <span className={cx('slogan')}>Eclasses - Learning every moments</span>
                </div>

                {location.pathname === '/search' || <Search className={cx('search-container')} />}

                <div className={cx('avatar-container')}>
                    <div className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <Tippy
                        className={cx('')}
                        placement="bottom"
                        offset={[-110, 10]}
                        interactive
                        render={() => <UserMenu />}
                    >
                        <img className={cx('avatar')} src={avatar} alt="avatar" />
                    </Tippy>
                </div>
            </header>
        )
    );
}

export default Header;
