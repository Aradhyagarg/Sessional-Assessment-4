
import './App.css';
import Form from './components/Form'
import Lists from './components/Lists'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<Form/>}></Route>
        <Route path='/lists' element={<Lists/>}></Route>
      </Routes>
    </Router>

      
    </div>
  );
}

export default App;