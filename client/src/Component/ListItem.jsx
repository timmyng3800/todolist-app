import React, { useState } from "react";
import Modal from "./Modal";

const ListItem = ({ tasks }) => {
  console.log("test list item", tasks);
  const [showModal, setShowModal] = useState(false)
  return (
    <div className="flex flex-row mx-5 mt-10 justify-between border border-gray-300 py-4 rounded-lg">
      <p className="pl-5">{tasks?.title}</p>
      <div>
        <p>{tasks?.progress}</p>
      </div>
      <div className="pr-5">
        <button onClick={()=>setShowModal(!showModal)} class="hover:bg-gray-100 text-green-500 w-20 py-2 border mr-3 border-green-400 rounded">
          Edit
        </button>
        <button class="hover:bg-gray-100 text-red-500 w-20  py-2  border border-red-400 rounded">
          Delete
        </button>
      </div>
      {
        showModal ? <Modal setShowModal={setShowModal} mode={"edit"} task={tasks}/> : null
      }
    </div>
  );
};

export default ListItem;
