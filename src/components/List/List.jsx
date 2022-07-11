import classes from "./List.module.css";

const List = ({ dummyArr }) => {
  return (
    <ul>
      {dummyArr.map((task, index) => {
        return <li key={`listItem_${index}`}>{task.toDo}</li>;
      })}
    </ul>
  );
};

export default List;
