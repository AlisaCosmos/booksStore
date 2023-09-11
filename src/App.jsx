import { Route, Routes } from 'react-router';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';
import Header from './components/Header/Header';
import { useRef } from 'react';

function App() {
  const ref = useRef(null);
  return (
    <div className="App" ref={ref}>
      <header className="App-header">
        <Header />
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<MainPage refapp={ref} />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
