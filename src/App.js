import { Header } from './components/Header'
import { Home } from './pages/Home'
import { Footer } from './components/Footer';
import { WorksContent } from './pages/Works/index';
import { WorkDetail } from './pages/Works/WorkDetail';
import { AboutContent } from './pages/About/index';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/content" element={<AboutContent />} />
        <Route path="/works/content" element={<WorksContent />} />
        <Route path="/workdetail/:title" element={<WorkDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
