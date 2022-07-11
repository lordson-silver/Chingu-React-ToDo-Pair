import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import Form from "./components/Form/Form";
import { useState } from "react";

function App() {
  let appDetermineTheTitle = "To Do App";

  let [dummyArr, setDummyArr] = useState([
    {
      toDo: "Learn React",
    },
    {
      toDo: "Learn ES6",
    },
    {
      toDo: "Learn TO BE DOPE",
    },
  ]);

  return (
    <div className="App">
      <Header title={appDetermineTheTitle} />
      <Form dummyArr={dummyArr} setDummyArr={setDummyArr} />
      <List dummyArr={dummyArr} />
      <Footer />
    </div>
  );
}

export default App;
