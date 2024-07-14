import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import HomeFeed from './pages/HomeFeed';
import ProfilePage from './pages/ProfilePage';
import UploadFormPage from './pages/UploadFormPage';
import EditFormPage from './pages/EditFormPage';

const App = () => {
  return (
    <div>
      <Router>
        <Hero />
        <Routes>
          <Route path="/creators" element={<HomeFeed />} />
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadFormPage />} />
          <Route path="/edit/:id" element={<EditFormPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;