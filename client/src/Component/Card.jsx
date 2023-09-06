import React, { useState, useEffect } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ListItem from "./ListItem";
import Modal from "./Modal";
const Card = () => {
  const [showModal, setShowModal] = useState(false);
  const userEmail = "quanganhtin2000@gmail.com";
  const [tasks, setTasks] = useState(null);

  const getdata = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${userEmail}`);
      const json = await response.json();
      console.log(json);
      setTasks(json);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  console.log("test", tasks);

  return (
    <div className="w-full justify-items-center content-center items-center flex flex-col">
      <div className="w-96 md:w-1/2 border border-gray-400 bg-sky-100 rounded-lg flex text-lg py-10 flex-col">
        <div className="flex self-center mb-5">
          Welcome back 
        </div>
        <div
          className="self-center flex bg-white"
          onClick={() => setShowModal(!showModal)}
        >
          <button class="hover:bg-gray-100 w-48 text-black font-semibold py-4 px-4 border border-gray-400 rounded flex flex-row">
            <AiOutlinePlusCircle size={25} className="mr-2 mt-0.5" />
            <p>Add new task</p>
          </button>
        </div>

        {tasks?.map((item) => {
          return <ListItem key={item.id} tasks={item} getData={getdata} />;
        })}

        {showModal ? (
          <Modal
            mode={"create"}
            setShowModal={setShowModal}
            getData={getdata}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Card;
