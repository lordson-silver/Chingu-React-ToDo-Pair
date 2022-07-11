import { useState } from "react";

const Form = ({ dummyArr, setDummyArr }) => {
  const [userInput, setUserInput] = useState("");

  const changeInputHandler = (event) => {
    setUserInput(() => event.target.value);
  };

  const submitInfo = (event) => {
    event.preventDefault();

    setDummyArr((prev) => {
      return [...prev, { toDo: userInput }];
    });
  };

  return (
    <form>
      <label htmlFor="inpt">New To-do</label>
      <br />
      <input
        onChange={changeInputHandler}
        value={userInput}
        type="text"
        name="inpt"
      />
      <button onClick={submitInfo} type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
