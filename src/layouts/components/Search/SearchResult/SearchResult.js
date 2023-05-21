import classNames from 'classnames/bind';
import Header from './Header';
import styles from './SearchResult.module.scss';
import ResultItem from './ResultItem';

const cx = classNames.bind(styles);

function SearchReSult({ result, searchValue }) {
    return (
        <div className={cx('wrapper')}>
            <Header searchValue = {searchValue} />
            <div className={cx('body')}>
                {result.map(item => (
                    <ResultItem key={item.id} poster={item.poster} name={item.name} />
                ))}
            </div>
        </div>
    );
}

export default SearchReSult;
