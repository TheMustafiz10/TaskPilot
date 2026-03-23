function TaskDetailsShimmer() {
  return (
    <div className="flex flex-col min-h-screen items-center px-5 sm:px-10 animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 mx-4 sm:mx-10 lg:mx-20 my-4 py-6 rounded-lg w-full max-w-2xl">
        <div className="h-8 sm:h-10 w-48 mx-auto bg-gray-400 dark:bg-gray-600 rounded"></div>
      </div>

      <div className="flex flex-col justify-between gap-6 sm:gap-10 border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 px-6 sm:px-8 py-6 sm:py-8 rounded-lg w-full max-w-2xl">
        <div className="flex flex-col gap-4">
          <div className="h-5 w-16 ml-auto bg-gray-400 dark:bg-gray-600 rounded"></div>

          <div className="h-8 sm:h-10 w-full bg-gray-400 dark:bg-gray-600 rounded"></div>

          <div className="h-5 w-40 bg-gray-400 dark:bg-gray-600 rounded"></div>
        </div>
        <div className="h-10 w-full sm:w-40 bg-gray-400 dark:bg-gray-600 rounded"></div>
      </div>
    </div>
  );
}

export default TaskDetailsShimmer;
