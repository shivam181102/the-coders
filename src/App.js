import "./App.css";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import FormItem from "./components/Form/FormItem";
import TotalForm from "./components/Form/TotalForm";
import Form from "./components/Form";
import Template from "./components/Template/Template";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import AddQuestions from './components/Template/AddQuestions'

function App() {
  const [logedin, setlogedin] = useState(false);
  return (
    <>
      {logedin?(<Sidebar logstate={setlogedin}/>):null}
      {/* <Sidebar/> */}
      <div style={{width:'100vw',text:'center'}}>
      <div style={{marginLeft:'27%', width:'80%'}}>
      <Routes>
        <Route index element={<Login loginstate={setlogedin}/>} />
        {/* <Route path="/Sidebar" element={<Sidebar />}> */}
          <Route exact path="/Form" element={<Form />} />
          <Route exact path="/Form/FormItem" element={<FormItem />} />
          <Route exact path="/Form/TotalForm" element={<TotalForm />} />
          <Route exact path="/Template" element={<Template />} />
          <Route exact path="/AddQuestions" element={<AddQuestions />} />
          {/* <Route exact path="/" element={<Template />} /> */}
        {/* </Route> */}
      </Routes>
      </div>
      </div>
    </>
  );
}

export default App;
