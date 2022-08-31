import './App.css';
import Header from './components/Header';
import ListDetail from './components/ListDetail';
import Main from './components/Main';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route  path="/" element={<Main/>} />
         <Route  path="/listview/:id" element={<ListDetail/>} />
      </Routes>   
    </div>
  );
}

export default App;
