import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Form from './components/Form';
import Template from './components/Template/Template';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import FormItem from './components/Form/FormItem';
import TotalForm from './components/Form/TotalForm';
import Login from './components/Login';
const root = ReactDOM.createRoot(document.getElementById('root'));
// const [logedin, setlogedin] = useState(false)

root.render(
  <React.StrictMode>
 <BrowserRouter>
        {/* {!logedin?(<Login loginstate={setlogedin}/>):(<Sidebar/>)}  */}
       <App/>
       
        {/* </Routes> */}
        
        {/* <Sidebar /> */}
      </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
