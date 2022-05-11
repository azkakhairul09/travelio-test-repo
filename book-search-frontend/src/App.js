import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BookCard from './modules/component/bookCard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BookCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
