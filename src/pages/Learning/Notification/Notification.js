import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBold, faItalic, faUnderline } from '@fortawesome/free-solid-svg-icons';
import { useRef, useState } from 'react';

import request from '~/utils/request';
import Button from '~/components/Button/Button';
import styles from './Notification.module.scss';
import OldNotifications from './OldNotification/OldNotifications';

const cx = classNames.bind(styles);

function Notification({ course, user }) {
    const [active, setActive] = useState(false);
    const [textBox, setTextBox] = useState('');
    const [oldNotis, setOldNotis] = useState(course.notifications);

    const inputRef = useRef();

    const handleChange = (e) => {
        setTextBox(e.target.value);
    };

    const handleOpen = () => {
        setActive(true);
    };

    const handleCancel = (e) => {
        e.stopPropagation();
        setActive(false);
    };

    const handlePost = (e) => {
        const notis = course.notifications;
        const newNotification = {
            id: notis.length > 0 ? notis[notis.length - 1].id + 1 : 1,
            nameAuthor: user.name,
            avatarAuthor: user.avatar,
            date: new Date().toLocaleDateString('en-GB'),
            content: textBox,
        };
        console.log(newNotification);
        request
            .patch(`courses/${course.id}`, {
                ...course,
                notifications: [...course.notifications, newNotification],
            })
            .then((res) => setOldNotis(res.data.notifications))
            .catch((err) => console.log(err));
        e.stopPropagation();
        setActive(false);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('new-noti', { active: active })} onClick={handleOpen}>
                {!active && (
                    <>
                        <div className={cx('avatar-container')}>
                            <img className={cx('avatar')} src={user.avatar} alt="avatar" />
                        </div>
                        <div className={cx('inner-text')}>Thông báo nội dung nào đó cho lớp học của bạn</div>
                    </>
                )}

                {active && (
                    <div className={cx('text-box')}>
                        <textarea
                            ref={inputRef}
                            className={cx('editable-content')}
                            placeholder="Thông báo nội dung nào đó cho lớp học của bạn"
                            onChange={handleChange}
                        ></textarea>
                        <div className={cx('text-type')}>
                            <FontAwesomeIcon className={cx('icon')} icon={faBold} />
                            <FontAwesomeIcon className={cx('icon')} icon={faItalic} />
                            <FontAwesomeIcon className={cx('icon')} icon={faUnderline} />
                        </div>
                        <div className={cx('btn-container')}>
                            <Button className={cx('discard')} onClick={handleCancel}>
                                Hủy
                            </Button>
                            <Button disable={!textBox} className={cx('submit')} onClick={handlePost}>
                                Đăng
                            </Button>
                        </div>
                    </div>
                )}
            </div>
            {oldNotis && oldNotis.map((oldNoti) => (
                <OldNotifications key={oldNoti.id} oldNoti={oldNoti} />
            ))}
        </div>
    );
}

export default Notification;
