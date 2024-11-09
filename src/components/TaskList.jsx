import React from "react";
import { useRef, useState, useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";

const TaskList = ({ userId }) => {
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const inputRef = useRef(null);

  // Update localStorage whenever tasks or completedTasks change
  useEffect(() => {
    if (userId) {
      // Load tasks and completedTasks from localStorage using userId
      const storedTasks = localStorage.getItem(`tasks_${userId}`);
      const storedCompletedTasks = localStorage.getItem(
        `completedTasks_${userId}`
      );

      if (storedTasks) {
        setTasks(JSON.parse(storedTasks));
      }
      if (storedCompletedTasks) {
        setCompletedTasks(JSON.parse(storedCompletedTasks));
      }
    }
  }, [userId]); // Only reload tasks when userId changes

  useEffect(() => {
    if (userId) {
      // Update localStorage whenever tasks or completedTasks change
      localStorage.setItem(`tasks_${userId}`, JSON.stringify(tasks));
      localStorage.setItem(
        `completedTasks_${userId}`,
        JSON.stringify(completedTasks)
      );
    }
  }, [tasks, completedTasks, userId]); // Update localStorage whenever tasks or completedTasks change

  const addTask = () => {
    const newTask = inputRef.current.value;
    if (newTask) {
      setTasks([...tasks, newTask]);
      inputRef.current.value = "";
    }
  };

  const handleToggle = (index) => {
    if (completedTasks.includes(index)) {
      setCompletedTasks(completedTasks.filter((i) => i !== index)); // Remove the task from completed tasks if already completed
    } else {
      setCompletedTasks([...completedTasks, index]); // Add the task to completed tasks if not already completed
    }
  };

  const handleDelete = (index) => {
    const newTaskList = tasks.filter((_, i) => i !== index); // Filter out the task by index
    setTasks(newTaskList); // Update the tasks list
    setCompletedTasks(completedTasks.filter((i) => i !== index)); // Remove deleted task from completedTasks if it's completed
  };

  return (
    <div className="px-4 mt-10">
      <h3 className="font-bold text-gray-700 text-sm pb-8">Task List</h3>
      <div className="bg-white text-gray-600 py-4 rounded-xl shadow-lg h-64 overflow-y-auto">
        <h3 className="pl-3 text-sm pb-6 font-semibold">Daily Tasks</h3>
        <ul>
          {tasks.map((task, index) => (
            <div className="flex justify-between" key={index}>
              <div className="flex gap-4 px-3 mb-2">
                <input
                  type="radio"
                  checked={completedTasks.includes(index)} // Check if task is completed
                  onChange={() => handleToggle(index)} // Toggle completion of task
                  className="radio"
                />
                <li
                  className={`list-none ${
                    completedTasks.includes(index)
                      ? "line-through text-gray-400"
                      : ""
                  }`}
                >
                  {task}
                </li>
              </div>
              <div className="pr-4 cursor-pointer">
                <RiDeleteBin6Line onClick={() => handleDelete(index)} />
              </div>
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
