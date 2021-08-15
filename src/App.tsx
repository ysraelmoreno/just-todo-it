import { useEffect, useState } from "react";
import { uuid } from "uuidv4";
import { IoIosTrash } from "react-icons/io";

import options from "./options";

import {
  AppWrapper,
  Header,
  LogoContainer,
  InputWrapper,
  TodoContent,
  TodoItem,
  Counter,
  TodoInputItem,
} from "./App.styles";

import Logo from "./assets/logo.svg";

// @ts-ignore
import audioDoIt from "./assets/doit2.mp3";

// @ts-ignore
import yesterday from "./assets/yesterday.mp3";
// @ts-ignore
import stopgivingup from "./assets/stopgivingup.mp3";

interface ITodo {
  id: string;
  title: string;
  category: string;
  done: boolean;
}

function App() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [done, setDone] = useState(0);

  function handleClick(event: any) {
    event.preventDefault();

    const audio = new Audio(audioDoIt);
    audio.volume = 0.1;
    audio.play();

    setTodo([
      ...todo,
      { id: uuid(), title: todoTitle, category: todoCategory, done: false },
    ]);
  }

  function handleTodo(event: any) {
    const findTodo = todo.find((index) => index.id === event.target.value);
    const index = todo.findIndex((index) => index.id === event.target.value);

    if (findTodo) {
      if (!findTodo.done) {
        const audio = new Audio(stopgivingup);
        audio.volume = 0.4;
        audio.currentTime = 700;
        audio.play();

        setTimeout(() => {
          audio.pause();
        }, 7000);
        console.log("stop giving up");
      } else {
        const audio = new Audio(yesterday);
        audio.volume = 0.4;
        audio.play();

        setTimeout(() => {
          audio.pause();
        }, 3000);
        console.log("yesterday");
      }

      findTodo.done = !findTodo?.done;
      todo.splice(index, 1, findTodo);
    }

    const filterDone = todo.filter((item) => item.done === true);

    setDone(filterDone.length);
    setTodo(todo);
  }

  useEffect(() => {
    const categoryDefault = options.find((option) => option.selected === true);

    categoryDefault && setTodoCategory(categoryDefault.value);
  }, []);

  return (
    <AppWrapper>
      <Header>
        <LogoContainer>
          <img src={Logo} alt="logo" />
          <div>
            <h1>Just todo-IT</h1>
            <span>A simple todo-list application</span>
          </div>
        </LogoContainer>
      </Header>

      <InputWrapper>
        <form onSubmit={handleClick}>
          <label>To do:</label>
          <input
            onChange={(e) => setTodoTitle(e.target.value)}
            name="Todo"
            placeholder="What you need to do?"
          />
          <label>The work is about:</label>
          <select
            value={todoCategory}
            onChange={(e) => setTodoCategory(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button type="submit" onClick={handleClick}>
            Create TODO
          </button>
        </form>
      </InputWrapper>

      <TodoContent>
        <Counter>
          <span>
            You has {done}/{todo.length} tasks done
          </span>
        </Counter>
        {todo.map((singleTodo) => {
          const filtered = options.find(
            (option) => option.value === singleTodo.category
          );

          return (
            <TodoItem key={singleTodo.id}>
              <label about="todo-checker">
                <TodoInputItem isChecked={singleTodo.done}>
                  <input
                    type="checkbox"
                    name="todo-checker"
                    id="todo-checker"
                    value={singleTodo.id}
                    onClick={handleTodo}
                  />
                  <div>
                    <p>{singleTodo.title}</p>
                    <span>{filtered?.label}</span>
                  </div>
                </TodoInputItem>

                <div>
                  <IoIosTrash size={24} />
                </div>
              </label>
            </TodoItem>
          );
        })}
      </TodoContent>
    </AppWrapper>
  );
}

export default App;
