import { useState } from 'react';
import lessons from '../../data/lessons';
import LessonToggle from '../lessonToggle/lessonToggle';
import './lessonPicker.css'

function LessonPicker(props) {
    const [checkedState, setCheckedState] = useState(
        new Array(lessons.length).fill(false)
    );

    const onToggle = (position) => {
        const updatedCheckedState = checkedState.map((item, index) => {
            return index === position ? !item : item;
        });

        setCheckedState(updatedCheckedState);

        var selectedLessons = [];
        updatedCheckedState.forEach((checked, index) => {
            if (checked) {
                selectedLessons.push(lessons[index]);
            }
        });

        props.onSelectedLessonsChanged(selectedLessons);
    };

    return (
        <div>
            {lessons.map((lesson, index) => 
                <LessonToggle key={lesson.id} lesson={lesson} checked={checkedState[index]} onToggle={onToggle} />
            )}
        </div>
    );
}

export default LessonPicker;