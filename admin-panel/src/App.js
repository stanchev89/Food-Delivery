import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';

function App() {
  return (
    <div className="App">
        <Header admin="Stefan"></Header>
        <Aside></Aside>
    </div>
  );
}

export default App;
