import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import ListItem from "./ListItem";
import Modal from "./Modal";
const Card = ({ tasks }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="w-full justify-items-center content-center items-center flex flex-col">
      <div className="w-96 md:w-1/2 border border-gray-400 bg-sky-100 rounded-lg flex text-lg py-10 flex-col">
        <div className="flex self-center mb-5">
          Welcome back {tasks?.user_email}
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

        <ListItem tasks={tasks} />
        {showModal ? <Modal mode ={"create"} setShowModal={setShowModal} /> : null}
      </div>
    </div>
  );
};

export default Card;
