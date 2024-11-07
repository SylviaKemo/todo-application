import React from "react";
import { useRef, useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
// import { RiDeleteBin6Line } from "react-icons/ri";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const inputRef = useRef(null);

  const addTask = () => {
    const newTask = inputRef.current.value;
    if (newTask) {
      setTasks([...tasks, newTask]);
      inputRef.current.value = "";
    }
  };
  return (
    <div className="px-4 mt-10">
      <h3 className="font-bold text-gray-700 text-sm pb-8">Task List</h3>
      <div className="bg-white text-gray-600 py-4 rounded-xl shadow-lg h-64 overflow-y-auto">
        <h3 className="pl-3 text-sm pb-6 font-semibold">Daily Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <div className="flex justify-between">
              <div className="flex gap-4 px-3 mb-2" key={index}>
                <input type="radio" className="" />
                <li className="list-none">{task}</li>
              </div>
              {/* <div className="pr-4">
                <RiDeleteBin6Line />
              </div> */}
            </div>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-2 flex items-end w-full">
        <input
          type="text"
          placeholder=""
          ref={inputRef}
          className="px-3 py-2 w-[85%] bg-transparent border-b-[1px] border-[#FAA885]"
        />
        <CiCirclePlus
          className="text-[30px] text-[#FAA885]"
          onClick={addTask}
        />
      </div>
    </div>
  );
};

export default TaskList;
