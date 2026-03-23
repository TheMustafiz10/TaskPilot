import ErrorData from "../components/error_data";
import TaskStatusButton from "../components/task_status_button";
import useFetch from "../hooks/use_fetch";
import TaskDetailsShimmer from "../components/task_details_shimmar";
import { useParams } from "react-router";

function TaskDetails() {
  const { taskId } = useParams();

  const { data, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/todos/${taskId}`
  );

  if (loading) return <TaskDetailsShimmer />;
  if (error) return <ErrorData />;

  return (
    <div className="flex flex-col min-h-screen items-center px-5 sm:px-10">
      <div className="bg-orange-500 dark:bg-blue-500 mx-4 sm:mx-10 lg:mx-20 my-4 py-3 rounded-lg w-full max-w-2xl">
        <h1 className="text-2xl sm:text-4xl text-center text-white font-bold">
          Task Details
        </h1>
      </div>
      <div
        key={data.id}
        className="flex flex-col justify-between gap-6 sm:gap-10 border border-gray-400 dark:bg-gray-900 bg-gray-200 px-6 sm:px-8 py-6 sm:py-8 rounded-lg
         w-full max-w-2xl text-base sm:text-xl"
      >
        <div className="flex flex-col gap-4">
          <h1 className="text-xl sm:text-2xl flex justify-end">#{data.id}</h1>
          <h2 className="text-2xl sm:text-4xl">{data.title}</h2>
          <p className="text-base sm:text-xl">Created By User {data.userId}</p>
        </div>
        <TaskStatusButton status={data.completed} />
      </div>
    </div>
  );
}

export default TaskDetails;
