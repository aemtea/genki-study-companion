import LessonSelector from './lessonSelector';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Genki Study Companion</h1>
        <p>A study companion for practicing grammar/vocabulary introduced in Genki: An Integrated Course in Elementary Japanese.</p>

        <LessonSelector />
        <button type='button'>Study</button>
      </header>
    </div>
  );
}

export default App;
