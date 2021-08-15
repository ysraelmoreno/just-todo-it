import { useState } from "react";

import options from "./options";

import {
  AppWrapper,
  Header,
  LogoContainer,
  InputWrapper,
  TodoContent,
  TodoItem,
  Counter,
} from "./App.styles";

import Logo from "./assets/logo.svg";
import { useRef } from "react";

// @ts-ignore
import audioDoIt from "./assets/doit2.mp3";

// @ts-ignore
import audioDreams from "./assets/makeudreams.mp3";

interface ITodo {
  title: string;
  category: string;
  done: boolean;
}

function App() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [done, setDone] = useState(0);

  const checkboxRef = useRef<HTMLInputElement>(null);

  function handleClick(event: any) {
    event.preventDefault();

    const audio = new Audio(audioDoIt);
    audio.volume = 0.1;
    audio.play();
    setTodo([
      ...todo,
      { title: todoTitle, category: todoCategory, done: false },
    ]);
  }

  function handleTodo(event: any) {
    const findTodo = todo.find((index) => index.title === event.target.value);
    const index = todo.findIndex((index) => index.title === event.target.value);

    if (findTodo) {
      findTodo.done = !findTodo?.done;
      todo.splice(index, 1, findTodo);
    }

    const filterDone = todo.filter((item) => item.done === true);

    const audio = new Audio(audioDreams);
    audio.volume = 0.1;
    audio.play();

    setDone(filterDone.length);
    setTodo(todo);
  }
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
          <select onChange={(e) => setTodoCategory(e.target.value)}>
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
            <TodoItem>
              <label about="todo-checker">
                <div>
                  <input
                    ref={checkboxRef}
                    type="checkbox"
                    name="todo-checker"
                    id="todo-checker"
                    value={singleTodo.title}
                    onClick={handleTodo}
                  />
                </div>
                <div>
                  <h2>{singleTodo.title}</h2>
                  <span>{filtered?.label}</span>
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
