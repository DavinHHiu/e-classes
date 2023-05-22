import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';

import request from '~/utils/request';
import styles from './Home.module.scss';
import ListItem from '../components/ListItem/ListItem';

const cx = classNames.bind(styles);

function Home() {
    const [courseList, setCourseList] = useState([]);

    useEffect(() => {
        request
            .get('courses', {
                params: {
                    _limit: 20,
                },
            })
            .then((res) => {
                setCourseList(res.data);
            });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <ListItem courseList={courseList} title='Lớp học miễn phí' />
        </div>
    );
}

export default Home;
