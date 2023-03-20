import { useState } from 'react';
import LessonPicker from './components/lessonPicker/lessonPicker';
import vocab from './data/vocab';
import './App.css';

function App() {
  const [selectedLessons, setSelectedLessons] = useState([]);

  const onSelectedLessonsChanged = (selectedLessons) => {
    setSelectedLessons(selectedLessons);
  };

  const onStudyClick = () => {    
    let lessonIds = selectedLessons.map((lesson) => lesson.id);
    let selectedVocab = vocab.filter((word) => {
      return lessonIds.indexOf(word.lesson) > -1;
    });

    console.log(selectedVocab);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Genki Study Companion</h1>
        <p>A study companion for practicing grammar/vocabulary introduced in Genki: An Integrated Course in Elementary Japanese.</p>

        <LessonPicker onSelectedLessonsChanged={onSelectedLessonsChanged} />
        <button type='button' onClick={onStudyClick}>Study</button>
      </header>
    </div>
  );
}

export default App;
