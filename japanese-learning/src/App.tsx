import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import KanaPage from './pages/KanaPage';
import VocabularyPage from './pages/VocabularyPage';
import GrammarPage from './pages/GrammarPage';
import ReadingPage from './pages/ReadingPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="kana" element={<KanaPage />} />
          <Route path="vocabulary" element={<VocabularyPage />} />
          <Route path="grammar" element={<GrammarPage />} />
          <Route path="reading" element={<ReadingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}