import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import FullScreenVideo from "./components/FullScreen/FullSize";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Signup></Signup>}></Route>
          <Route exact path='/sign-up' element={<Signup></Signup>}></Route>
          <Route exact path='/sign-in' element={<Signin></Signin>}></Route>
          <Route exact path='/home' element={<HomePage></HomePage>}></Route>
          <Route exact path='/full-screen' element={<FullScreenVideo></FullScreenVideo>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
