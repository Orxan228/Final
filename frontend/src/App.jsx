import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomeCon from "./Components/HomeCon/HomeCon"
import AddCon from "./Components/AddCon/AddCon"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Detail from "./Components/Detail/Detail"
function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
          <Routes>
            <Route path="/" element={<HomeCon/>}/>
            <Route path="/add" element={<AddCon/>}/>
            <Route path="/:id" element={<Detail/>}/> 
          </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
