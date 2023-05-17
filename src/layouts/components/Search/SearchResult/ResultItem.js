import classNames from 'classnames/bind';
import styles from './SearchResult.module.scss';

const cx = classNames.bind(styles);

function ResultItem({ avatar, name }) {
    return (
        <div className={cx('result-item')}>
            <img
                className={cx('result-avatar')}
                src="https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
                alt=""
            />
            <span className={cx('result-name')}>Xây dựng Website với ReacJS</span>
        </div>
    );
}

export default ResultItem;
