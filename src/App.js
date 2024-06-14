
import './App.css';
import BoardQuiz from './components/quiz/board-quiz';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/header';
import Results from './components/results/results';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/quiz" element={<BoardQuiz />} />
        <Route path="/results" element={<Results />} />
        <Route path="*" element={<h1>Page not found x_x</h1>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
