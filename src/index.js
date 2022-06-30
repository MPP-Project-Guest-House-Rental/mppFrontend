import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LogIn from './pages/UserManagment/LogIn';
import Header from './common/header';
import Footer from './common/footer';
import SignUp from './pages/UserManagment/SignUp';
import PropertyImageList from './pages/PropertyImageList';
import PropertyStepper from './pages/Property/PropertyStepper';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Header />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signUp" element={<SignUp />} />
      <Route path='PropertyImageList' element={<PropertyImageList />} />
      <Route path='PropertyStepper' element={<PropertyStepper />} />
    </Routes>
    <Footer />
  </BrowserRouter>
 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
