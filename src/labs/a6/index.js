import Nav from "../../nav.js";
import Classes from "./classes/index.js";
import Styles from "./styles/index.js";
import ConditionalOutput from "./conditional-output/index.js";
import TodoItem from "./todo/todo-item.js";
import TodoList from "./todo/todo-list.js";

function Assignment6() {
  return (
    <div>
      <Nav />
      <h1>Assignment 6</h1>
      <TodoItem />
      <TodoList />
      <ConditionalOutput />
      <Styles />
      <Classes />
    </div>
  );
}
export default Assignment6;
