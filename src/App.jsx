import GlobalStyle from "./Globlestyle"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Moviedetail from "./pages/Moviedetail";
import Form from "./pages/Form";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer ";


function App() {


  return (
    <>


      <GlobalStyle />


      <BrowserRouter>


        <Navbar />



        <Routes>
          <Route >
            <Route path="/" element={<Home />} />
            <Route path="/detail/:movie_id" element={<Moviedetail />} />
            <Route path="/ticket" element={<Form />} />
          </Route>
        </Routes>




     


      </BrowserRouter>

      <Footer />


    </>
  )
}

export default App
