import { PlusCircle } from "@phosphor-icons/react";
import { ChangeEvent, useState } from "react";
import EmptyList from "../EmptyList";

interface Task {
  id: number;
  content: string;
  isFinished: boolean;
}

export default function TaskList() {
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState<Task[]>([]);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleCreate = () => {

    const newTask: Task = {
      id: list.length,
      content: inputValue,
      isFinished: false,
    };
    setList([...list, newTask]);
    setInputValue("");
  };
  
  return (
    <>
      <div>
        <div className="flex items-center justify-center mt-[-27px] gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={handleChangeInput}
            className="w-[638px] h-[54px] bg-[#262626] rounded-lg"
          ></input>
          <button onClick={handleCreate} className=" flex w-[90px] h-[52px] bg-[#1E6F9F] rounded-lg text-gray-100 text-sm font-bold items-center justify-center gap-2">
            Criar
            <PlusCircle color="#F2F2F2" size={20} />
          </button>
        </div>
        <div className="mt-16 flex justify-center">
          {list.length > 0 ? (
            <div>
              {list.map((task) => (
                <p key={task.id}>Tarefa: {task.content}</p>
              ))}
            </div>
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </>
  );
}
