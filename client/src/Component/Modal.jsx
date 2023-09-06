import React, { useState } from "react";

const Modal = ({ mode, setShowModal, task, getData }) => {
  console.log(mode);
  const editMode = mode === "edit" ? true : false;
  const [data, setData] = useState({
    user_email: editMode ? task.user_email : "quanganhtin2000@gmail.com",
    title: editMode ? task.title : null,
    progress: editMode ? task.progress : null,
    date: "",
  });

  const postData = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        console.log("WORKS");
        setShowModal(false);
        getData();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const editData = async (e) => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        setShowModal(false);
        getData();
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  return (
    <div className="overlay">
      <div className="modal">
        <div className="flex flex-row justify-between">
          <h1 className="text-2xl">Let's create your task</h1>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <form className="flex flex-col mt-10">
          <label class="block mb-4 text-sm font-medium text-gray-900 dark:text-gray-300 ">
            Task
          </label>
          <input
            required
            maxLength={20}
            placeholder="Your task to here"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="placeholder-gray-500 placeholder-opacity-50  focus:placeholder-gray-500 bg-gray-50 focus:bg-white focus:outline-none py-2 mb-10 px-3 border rounded-md text-sm"
          />

          <label class="block mb-4 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your Progress
          </label>

          <input
            value={data.progress}
            required
            type="range"
            min="0"
            max="100"
            name="progress"
            className="mb-20"
            onChange={handleChange}
          />
          <input
            type="submit"
            class=" flex-col self-center flex items-center justify-items-center  px-4 py-2 bg-gray-400 hover:bg-gray-700 text-white text-sm font-medium rounded-md w-1/2"
            onClick={editMode ? editData : postData}
          />
        </form>
      </div>
    </div>
  );
};

export default Modal;
