import './lessonSelector.css'

const lessons = [
    "Lesson 0: Writing System, Greetings, and Numbers",
    "Lesson 1: New Friends",
    "Lesson 2: Shopping",
    "Lesson 3: Making a Date",
    "Lesson 4: The First Date",
    "Lesson 5: A Trip to Okinawa",
    "Lesson 6: A Day in Robert's Life",
    "Lesson 7: Family Picture",
    "Lesson 8: Barbecue",
    "Lesson 9: Kabuki",
    "Lesson 10: Winter Vacation Plans",
    "Lesson 11: After the Vacation",
    "Lesson 12: Feeling Ill",
    "Lesson 13: Looking for a Part-time Job",
    "Lesson 14: Valentine's Day",
    "Lesson 15: A Trip to Nagano",
    "Lesson 16: Lost and Found",
    "Lesson 17: Grumble and Gossip",
    "Lesson 18: John's Part-time Job",
    "Lesson 19: Meeting the Boss",
    "Lesson 20: Mary Goes Shopping",
    "Lesson 21: Burglar",
    "Lesson 22: Education in Japan",
    "Lesson 23: Good-bye"
];
const lessonItems = lessons.map((lesson, index) => 
    <li>
        <input type='checkbox' id={"lesson_" + index} value={lesson}></input>
        <label for={"lesson_" + index}>{lesson}</label>
    </li>
);

function LessonSelector() {
    return (
        <div>
            <ul className='lessons'>{lessonItems}</ul>
        </div>
    );
}

export default LessonSelector;