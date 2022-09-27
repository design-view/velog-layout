import './App.css';
import Header from './components/Header';
import ListDetail from './components/ListDetail';
import Main from './components/Main';
import { Routes, Route} from 'react-router-dom';
import Search from './components/Search';
import LoginJoin from './components/LoginJoin';
import { useSelector } from 'react-redux';

function App() {
  const isLoginClick = useSelector(state=>state.members.isLoginClick)
  return (
    <div className="App">
      <Header/>
      <Routes>
         <Route  path="/" element={<Main/>} />
         <Route  path="/search" element={<Search/>} />
         <Route  path="/listview/:id" element={<ListDetail/>} />
      </Routes>   
      { isLoginClick && <LoginJoin/> }
    </div>
  );
}

export default App;
