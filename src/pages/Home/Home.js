import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import Button from '~/components/Button/Button';
import CourseItem from '~/components/CourseItem/CourseItem';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <section className={cx('free-classes')}>
                    <div className={cx('header')}>
                        <span className={cx('title')}>Lớp học miễn phí</span>
                        <Button
                            className={cx('more')}
                            rightIcon={<FontAwesomeIcon className={cx('more-icon')} icon={faChevronRight} />}
                            more
                            to=""
                        >
                            Xem tất cả
                        </Button>
                    </div>
                    <div className={cx('course-items')}>
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                    </div>
                </section>
                <section className={cx('free-classes')}>
                    <div className={cx('header')}>
                        <span className={cx('title')}>Lớp học miễn phí</span>
                        <Button href="">Xem tất cả</Button>
                    </div>
                    <div className={cx('course-items')}>
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                        <CourseItem
                            className={cx('course-item')}
                            src="https://files.fullstack.edu.vn/f8-prod/courses/7.png"
                            title="Kiến thức nhập môn IT"
                            studentsCount="40343"
                        />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Home;
