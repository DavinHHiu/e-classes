import classNames from 'classnames/bind';
import styles from './OldNotification.module.scss';

const cx = classNames.bind(styles);

function OldNotifications({oldNoti}) {
    const content = oldNoti.content.split('\n');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src={oldNoti.avatarAuthor} alt="avatar" />
                <div className={cx('info')}>
                    <span className={cx('author-name')}>{oldNoti.nameAuthor}</span>
                    <span className={cx('post-date')}>{oldNoti.date}</span>
                </div>
            </div>
            <div className={cx('content')}>
                {content.map((line, index) => {
                    if(line.startsWith('https://')) {
                        return <a key={index} className={cx('link')} href={line}>{line}<br></br></a>
                    }
                    return <span key={index}>{line}<br></br></span>
                })}
            </div>   
        </div>
    );
}

export default OldNotifications;
