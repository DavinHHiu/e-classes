import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function ResultItem({ poster, name }) {
    return (
        <div className={cx('result-item')}>
            <img
                className={cx('result-avatar')}
                src={poster}
                alt={name}
            />
            <span className={cx('result-name')}>{name}</span>
        </div>
    );
}

export default ResultItem;
