import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import UserMenu from '../UserMenu/UserMenu';
import styles from '../Header/Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('more-btn')}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <div className={cx('logo-container')}>
                <img
                    className={cx('logo')}
                    src="https://www.tadviser.ru/images/8/89/Expensify-app-logo.png"
                    alt="logo"
                />
                <span className={cx('slogan')}>Eclasses - Learning every moments</span>
            </div>

            <div className={cx('avatar-container')}>
                <div className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <Tippy placement="bottom" offset={[-110, 10]} interactive render={() => <UserMenu />}>
                    <img
                        className={cx('avatar')}
                        src="https://w7.pngwing.com/pngs/867/134/png-transparent-giant-panda-dog-cat-avatar-fox-animal-tag-mammal-animals-carnivoran-thumbnail.png"
                        alt=""
                    />
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
