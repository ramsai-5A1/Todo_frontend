import './App.css'
import Signup from './Signup'
import Appbar from './Appbar'

function App() {

  return (
    <div style={{width: "100vw", 
      height: "100vh", 
      backgroundColor: "#eeeee4"}}

    >

      <Appbar/>
      <Signup courseName={"coursera"} />
    </div>
  )
}

export default App
