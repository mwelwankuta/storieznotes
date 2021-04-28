import React from "react";
// import axios from "axios";

function Task({ title, body, image, id, date }) {
  // const [deleteText, setDeleteText] = useState("delete");
  // const [isOpen, setIsOpen] = useState(false);

  // const yesDelete = () => {
  //   // setDeleteText("Loading");
  //   axios
  //     .post("http://localhost:9000/delete", {
  //       id: id,
  //     })
  //     .then((res) => {
  //       // setDeleteText("delete");
  //     });
  // };

  return (
    <div className="border border-gray-200 pb-4 px-4 pt-6 my-2 text-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-150">
      <div>
        <div className="-mt-4 flex justify-between items-center">
          <h1 className=" text-lg font-medium">{title}</h1>
          <p className="text-sm">{date}</p>
        </div>
        <p>{body}</p>
        {image.length < 4 ? null : (
          <img
            src={image}
            className="sm:mx-auto md:mx-0 sm:w-full md:w-9/12"
            alt="Loading..."
          />
        )}
      </div>
      <div className="text-red-800 flex gap-2 mt-2">
        {/*<button
          className="border rounded px-1 text-xs border-red-800 hover:bg-red-200 duration-150 transition"
          onClick={() => yesDelete()}
        >
          {deleteText}
        </button>*/}
      </div>
    </div>
  );
}

export default Task;
