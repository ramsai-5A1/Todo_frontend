import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'
import Signin from './Signin'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AddCourse from './AddCourse';
import Courses from './Courses';

function App() {
  return (
    <div style={{width: "100vw", 
      height: "100vh", 
      backgroundColor: "#eeeee4"}}

    >
    
    <Router>
      <Appbar />
      <Routes>
        <Route path="/addcourse" element={<AddCourse />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/login" element={<Signin courseName={"coursera"}/>}/>
        <Route path="/signup" element={<Signup courseName={"coursera"}/>}/>
      </Routes>
    </Router>
    </div>
  )
}

export default App
