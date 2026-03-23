import useFetch from "../hooks/use_fetch";
import { useState } from "react";
import { Link } from "react-router";
import TaskListShimmer from "../components/tasks_list_shimmer";
import TaskStatusButton from "../components/task_status_button";
import ErrorData from "../components/error_data";
import SearchTasks from "../components/search_tasks";
import NoResult from "../components/no_result";

function TaskList() {
  const limit = 20;
  const [offset, setOffset] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: allTodos,
    loading,
    error,
  } = useFetch(`https://jsonplaceholder.typicode.com/todos`);

  const filteredTodos = allTodos
    ? allTodos.filter((task) =>
        task.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];
  const displayedTodos = filteredTodos.slice(offset, offset + limit);

  if (loading) return <TaskListShimmer />;
  if (error) return <ErrorData />;
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-orange-500 dark:bg-blue-500 mx-5 sm:mx-10 md:mx-10 my-4 py-3 rounded-lg relative px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl text-center text-white font-bold">
          Tasks List
        </h1>
        <SearchTasks
          onSearchChange={(value) => {
            setSearchTerm(value);
            setOffset(0);
          }}
        />
      </div>

      {displayedTodos.length === 0 ? (
        <NoResult />
      ) : (
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 sm:px-8 md:px-10 mb-10">
          {displayedTodos.map((task) => (
            <div
              key={task.id}
              className="flex flex-col justify-between gap-12 border border-gray-400 dark:bg-gray-900 hover:bg-gray-300 hover:dark:bg-gray-800 bg-gray-200 px-4 py-4 rounded-lg"
            >
              <div>
                <p className="text-sm flex justify-end">#{task.id}</p>
                <h2 className="text-2xl">{task.title}</h2>
                <p className="text-sm">Created By User {task.userId}</p>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-stretch items-stretch">
                <button className="bg-blue-500 text-white px-2 py-1 rounded font-bold">
                  <Link to={`/tasks/${task.id}`}>View Details</Link>
                </button>
                <TaskStatusButton status={task.completed} />
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center items-center px-4 sm:px-10 lg:px-20 mb-12 text-center text-sm sm:text-base">
        <button
          className="rounded px-4 py-1 bg-orange-500 dark:bg-blue-500 text-white font-bold disabled:dark:bg-blue-900 disabled:bg-orange-700 disabled:cursor-not-allowed cursor-pointer"
          onClick={() => setOffset((prev) => Math.max(0, prev - limit))}
          disabled={offset === 0}
        >
          {"< Previous"}
        </button>
        Showing {offset + 1}-{Math.min(offset + limit, filteredTodos.length)} of{" "}
        {filteredTodos.length} tasks
        <button
          className="rounded px-4 py-1 bg-orange-500 dark:bg-blue-500 text-white font-bold disabled:dark:bg-blue-900 disabled:bg-orange-700 disabled:cursor-not-allowed cursor-pointer"
          disabled={offset + limit >= filteredTodos.length}
          onClick={() => setOffset((prev) => prev + limit)}
        >
          {"Next >"}
        </button>
      </div>
    </div>
  );
}

export default TaskList;
