import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import request from '~/utils/request';
import Exercise from './Exercise';
import styles from './Assignment.module.scss';

const cx = classNames.bind(styles);

function Assignment() {
    const [exercises, setExercises] = useState();
    const [show, setShow] = useState();

    useEffect(() => {
        request.get('courses/1').then((res) => setExercises(res.data.exercises));
    }, []);

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
