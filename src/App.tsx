import { useEffect, useState, MouseEvent } from "react";
import { uuid } from "uuidv4";

import { FiBox, FiTrash2 } from "react-icons/fi";

import options from "./options";
import phrases from "./phrases";
import {
  AppWrapper,
  Header,
  LogoContainer,
  InputWrapper,
  TodoContent,
  TodoItem,
  Counter,
  TodoInputItem,
  TodoItemCheck,
  TodoDate,
} from "./App.styles";

import Logo from "./assets/logo.svg";

// @ts-ignore
import audioDoIt from "./assets/doit2.mp3";

// @ts-ignore
import yesterday from "./assets/yesterday.mp3";
// @ts-ignore
import stopgivingup from "./assets/stopgivingup.mp3";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";

interface ITodo {
  id: string;
  title: string;
  category: string;
  done: boolean;
  createdAt: Date;
}

function App() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [done, setDone] = useState(0);
  const [displayPhrases, setDisplayPhrases] = useState(0);

  function handleDeleteTodo(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const findTodo = todo.findIndex(
      (item) => item.id === event.currentTarget.value
    );

    const newTodo = todo.splice(findTodo, 0);
    setTodo(newTodo);
  }

  function handleClick(event: any) {
    event.preventDefault();

    if (todoTitle === "") return;
    const audio = new Audio(audioDoIt);
    audio.volume = 0.1;
    audio.play();

    setDisplayPhrases(Math.floor(Math.random() * (5 - 0) - 0));

    setTodo([
      ...todo,
      {
        id: uuid(),
        title: todoTitle,
        category: todoCategory,
        done: false,
        createdAt: new Date(),
      },
    ]);
  }

  function handleTodo(event: any) {
    const findTodo = todo.find((index) => index.id === event.target.value);
    const index = todo.findIndex((index) => index.id === event.target.value);

    if (findTodo) {
      if (findTodo.done === false) {
        const audio = new Audio(stopgivingup);
        audio.volume = 0.4;
        audio.play();

        setTimeout(() => {
          audio.pause();
        }, 3000);
      } else {
        const audio = new Audio(yesterday);
        audio.volume = 0.4;
        audio.play();

        setTimeout(() => {
          audio.pause();
        }, 7000);
      }
      findTodo.done = !findTodo?.done;
      todo.splice(index, 1, findTodo);
    }

    const filterDone = todo.filter((item) => item.done === true);

    setDisplayPhrases(Math.floor(Math.random() * (5 - 0) - 0));
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
          <Input
            icon={FiBox}
            onChange={(e) => {
              e.target.value !== "" && setTodoTitle(e.target.value);
            }}
            name="Todo"
            placeholder="What you need to do?"
          />
          <label>The work is about:</label>
          <Select
            value={todoCategory}
            onChange={(e) => setTodoCategory(e.target.value)}
          >
            {options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          <Button type="submit" onClick={handleClick}>
            Create TODO
          </Button>
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
              <form>
                <label about="todo-checker">
                  <TodoInputItem isChecked={singleTodo.done}>
                    <TodoItemCheck isChecked={singleTodo.done}>
                      <input
                        type="checkbox"
                        name="todo-checker"
                        id="todo-checker"
                        value={singleTodo.id}
                        onClick={handleTodo}
                      />
                      <span>
                        {singleTodo.done !== true ? "Not done" : "Done"}
                      </span>
                    </TodoItemCheck>
                    <div>
                      <p>{singleTodo.title}</p>
                      <h6>{filtered?.label}</h6>
                    </div>
                  </TodoInputItem>
                </label>

                <TodoDate>
                  <span>
                    created at:{" "}
                    {new Intl.DateTimeFormat("pt-BR").format(
                      singleTodo.createdAt
                    )}
                  </span>
                  <Button
                    type="submit"
                    value={singleTodo.id}
                    onClick={handleDeleteTodo}
                  >
                    <FiTrash2 size={20} />
                  </Button>
                </TodoDate>
              </form>
            </TodoItem>
          );
        })}
        <h4 className="phrases">{phrases[displayPhrases]}</h4>
        <p className="credits">
          Created with a lot of creativity by{" "}
          <a href="https://github.com/ysraelmoreno/just-todo-it">
            Ysrael Moreno
          </a>
        </p>
      </TodoContent>
    </AppWrapper>
  );
}

export default App;
