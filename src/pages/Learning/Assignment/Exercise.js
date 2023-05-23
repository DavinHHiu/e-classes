import classNames from 'classnames/bind';

import { ExcerciseIcon } from '~/components/Icons';
import styles from './Assignment.module.scss';

const cx = classNames.bind(styles);

function Exercise({ exercise, onClick, active }) {
    console.log(active);

    return (
        <div className={cx('exercise-container', { active: active })} onClick={onClick}>
            <div className={cx('exercise-box')}>
                <div className={cx('left-side-box')}>
                    <div className={cx('icon-box')}>
                        <ExcerciseIcon className={cx('icon')} />
                    </div>
                    <span className={cx('name')}>{exercise.name}</span>
                </div>
                <span className={cx('due-date')}>Đến hạn {exercise.dueDate}</span>
            </div>
            {active && (
                <div className={cx('open-box')}>
                    <div className={cx('exercise-detail-box')}>
                        <div className={cx('deadline')}>
                            <span className={cx('postDate')}>Đã đăng vào {exercise.postDate}</span>
                        </div>
                        <div className={cx('content-box')}>
                            <p className={cx('content')}>{exercise.content}</p>
                        </div>
                    </div>
                    <div className={cx('more')}>
                        <span className={cx('more-btn')}>Xem hướng dẫn</span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Exercise;
