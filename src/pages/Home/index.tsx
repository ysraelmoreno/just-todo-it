import { useEffect, useState, MouseEvent, useCallback } from "react";
import { uuid } from "uuidv4";

import { FiBox, FiTrash2 } from "react-icons/fi";

import options from "../../data/options";

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
} from "./styles";

import Logo from "../../assets/logo.svg";

import Input from "../../components/Input";
import Select from "../../components/Select";
import Button from "../../components/Button";
import useShia from "../../hooks/useShia";

interface ITodo {
  id: string;
  title: string;
  category: string;
  done: boolean;
  createdAt: Date;
}

function Home() {
  const [todo, setTodo] = useState<ITodo[]>([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoCategory, setTodoCategory] = useState("");
  const [done, setDone] = useState(0);

  const { addShia } = useShia();

  const handleDeleteTodo = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();

      const findTodo = todo.findIndex(
        (item) => item.id === event.currentTarget.value
      );

      todo.splice(findTodo, 1);

      setTodo([...todo]);
      setDone(todo.length);
    },
    [todo]
  );

  const handleClick = useCallback(
    (event: any) => {
      event.preventDefault();

      if (todoTitle === "") return;

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
    },
    [todo, todoTitle, todoCategory]
  );

  const handleTodo = useCallback(
    (event: any) => {
      const findTodo = todo.find((index) => index.id === event.target.value);
      const index = todo.findIndex((index) => index.id === event.target.value);

      if (findTodo) {
        findTodo.done = !findTodo?.done;
        todo.splice(index, 1, findTodo);
      }

      const filterDone = todo.filter((item) => item.done === true);

      if (filterDone.length === todo.length) addShia();

      setDone(filterDone.length);
      setTodo(todo);
    },
    [addShia, todo]
  );

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
                    created todo in:{" "}
                    {new Intl.DateTimeFormat("pt-BR").format(
                      singleTodo.createdAt
                    )}{" "}
                    at{" "}
                    {new Intl.DateTimeFormat("pt-BR", {
                      hour: "2-digit",
                      minute: "2-digit",
                    }).format(singleTodo.createdAt)}
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

export default Home;
