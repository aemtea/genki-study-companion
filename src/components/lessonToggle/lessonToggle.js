import './lessonToggle.css'

function LessonToggle(props) {
    var lesson = props.lesson;

    const onChange = () => {
        const start = "lesson".length;
        const index = lesson.id.substring(start);
        props.onChange(Number(index));
    }

    return(
        <div className='lesson'>
            <input 
                type='checkbox' 
                id={lesson.id}
                value={lesson.id}
                checked={props.checked}
                onChange={onChange}
            />
            <label for={lesson.id}>{lesson.description}</label>
        </div>
    );
}

export default LessonToggle;