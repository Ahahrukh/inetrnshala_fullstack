
import './App.css';
import Home from './components/home/Home';
import {Routes,Route} from 'react-router-dom'
import Student from './components/student/Student';
import Admin from './components/admin/Admin';


function App() {
 

  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/student" element={<Student/>} />
       <Route path="/admin" element={<Admin/>} />
     </Routes>
    </div>
  );
}

export default App;
