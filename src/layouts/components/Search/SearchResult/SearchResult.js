import classNames from 'classnames/bind';
import Header from './Header';
import styles from './SearchResult.module.scss';
import ResultItem from './ResultItem';

const cx = classNames.bind(styles);

function SearchReSult() {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('body')}>
                <ResultItem />
                <ResultItem />
                <ResultItem />
            </div>
        </div>
    );
}

export default SearchReSult;
