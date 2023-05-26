import classNames from "classnames/bind";
import styles from './Popup.module.scss'

const cx = classNames.bind(styles);

function Popup() {
    return ( <div className={cx()}></div> );
}

export default Popup;