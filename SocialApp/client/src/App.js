import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./components/auth/Signin";
import SignUp from './components/auth/Signup';
import Home from "./components/home";
import WritePost from "./components/MakePost/WritePost";
import Profile from "./components/profile";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<SignUp></SignUp>}></Route>
          <Route exact path='/home' element={<Home></Home>}></Route>
          <Route exact path='/profile' element={<Profile></Profile>}></Route>
          <Route exact path='/sign-up' element={<SignUp></SignUp>}></Route>
          <Route exact path='/sign-in' element={<Login></Login>}></Route>
          <Route exact path='/create-post' element={<WritePost></WritePost>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
