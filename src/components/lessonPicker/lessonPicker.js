import { useState } from 'react';
import lessons from '../../data/lessons';
import LessonToggle from '../lessonToggle/lessonToggle';
import './lessonPicker.css'

function LessonSelector() {
    const [checkedState, setCheckedState] = useState(
        new Array(lessons.length).fill(false)
    );

    const onChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => {
            return index === position ? !item : item;
        });

        setCheckedState(updatedCheckedState);
    };

    return (
        <div>
            {lessons.map((lesson, index) => 
                <LessonToggle lesson={lesson} checked={checkedState[index]} onChange={onChange} />
            )}
        </div>
    );
}

export default LessonSelector;