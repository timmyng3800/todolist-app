import React, { useState } from "react";
import Modal from "./Modal";
import ProgressBar from "./ProgressBar";

const ListItem = ({ tasks, getData }) => {
  const [showModal, setShowModal] = useState(false);
  const deleteItem = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos/${tasks.id}`, {
        method: "DELETE",
      });
      if (response.status === 200) {
        getData();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex flex-row mx-5 mt-10 justify-between border border-gray-300 py-4 rounded-lg">
      <div className="w-56">
      <p className="pl-5 pt-2">{tasks?.title}</p>

      </div>
      <div className="pt-3.5">
        <ProgressBar progress={tasks?.progress} />
      </div>
      <div className="pr-5">
        <button
          onClick={() => setShowModal(!showModal)}
          class="hover:bg-gray-100 text-green-500 w-20 py-2 border mr-3 border-green-400 rounded"
        >
          Edit
        </button>
        <button
          class="hover:bg-gray-100 text-red-500 w-20  py-2  border border-red-400 rounded"
          onClick={deleteItem}
        >
          Delete
        </button>
      </div>
      {showModal ? (
        <Modal setShowModal={setShowModal} mode={"edit"} task={tasks} />
      ) : null}
    </div>
  );
};

export default ListItem;
