import classNames from 'classnames/bind';
import { useState } from 'react';

import Exercise from './Exercise';
import styles from './Assignment.module.scss';

const cx = classNames.bind(styles);

function Assignment({ exercises }) {
    const [show, setShow] = useState();

    return (
        <div className={cx('wrapper')}>
            {exercises &&
                exercises.map((exercise, index) => (
                    <Exercise
                        key={index}
                        exercise={exercise}
                        onClick={() => {
                            if (show === exercise.id) setShow(0);
                            else setShow(exercise.id);
                        }}
                        active={show === exercise.id}
                    />
                ))}
        </div>
    );
}

export default Assignment;
