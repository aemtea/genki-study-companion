import { useState } from 'react';
import LessonPicker from './components/lessonPicker/lessonPicker';
import SentencePractice from './components/sentencePractice/sentencePractice';
import vocab from './data/vocab';
import templates from './data/templates';
import './App.css';

function App() {
  const [selectedLessons, setSelectedLessons] = useState([]);
  const [selectedTemplates, setSelectedTemplates] = useState([]);
  const [sentencePracticeVisible, setSentencePracticeVisible] = useState(false);

  const onSelectedLessonsChanged = (selectedLessons) => {
    setSelectedLessons(selectedLessons);
  };

  const onPracticeSentencesClick = () => {    
    const lessonIds = selectedLessons.map((lesson) => lesson.id);
    const selectedVocab = vocab.filter((word) => {
      return lessonIds.indexOf(word.lesson) > -1;
    });

    setSelectedTemplates(templates.filter((template) => {
      return lessonIds.indexOf(template.lesson) > -1;
    }));

    setSentencePracticeVisible(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Genki Study Companion</h1>
        <p>A study companion for practicing grammar/vocabulary introduced in Genki: An Integrated Course in Elementary Japanese.</p>

        <LessonPicker onSelectedLessonsChanged={onSelectedLessonsChanged} />
        <button type='button' onClick={onPracticeSentencesClick}>Practice Sentences</button>
      </header>

      {sentencePracticeVisible ? <SentencePractice templates={selectedTemplates} /> : null }
    </div>
  );
}

export default App;
