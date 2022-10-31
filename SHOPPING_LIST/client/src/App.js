import './App.css';
import { useEffect, useState } from 'react';
import Example from './components/navbar';
import MainPage from './components/MainPage';
import SignUp from './components/auth/Signup';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/auth/Signin';
import store from './store';
import { loadUser } from './actions/authActions';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    !loading && (
      <BrowserRouter>
        <div className="App">
          <Example></Example>
          <Routes>
            <Route exact path='/' element={<SignUp></SignUp>}></Route>
            <Route exact path='/sign-up' element={<SignUp></SignUp>}></Route>
            <Route path='/sign-in' element={<Login></Login>}></Route>
            <Route path='/home' element={<MainPage></MainPage>}></Route>
          </Routes>

          {/* <SignUp></SignUp> */}
          {/* <Example></Example>
        <MainPage></MainPage> */}
        </div>
      </BrowserRouter>

    )

  );
}



export default App;
