import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function ResultItem({ poster, name }) {
    return (
        <Link to="" className={cx('result-item')}>
            <img className={cx('result-avatar')} src={poster} alt={name} />
            <span className={cx('result-name')}>{name}</span>
        </Link>
    );
}
    
export default ResultItem;
