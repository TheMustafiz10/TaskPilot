import { useState } from "react";

function TaskStatusButton({ status }) {
    const [isComplete, setIsComplete] = useState(status);

    const toggleComplete = () => {
        setIsComplete(!isComplete);
    };
    return (
        <button
            onClick={toggleComplete}
            className={
              isComplete
                ? "bg-green-500 text-white  px-2 py-1 rounded font-bold cursor-pointer"
                : "bg-orange-500 text-white  px-2 py-1 rounded font-bold cursor-pointer"
            }
        >
            {isComplete ? "Completed" : "Incomplete"}
        </button>
    );
}

export default TaskStatusButton;