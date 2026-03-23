function TaskListShimmer() {
  return (
    <div className="flex flex-col min-h-screen animate-pulse">
      <div className="bg-gray-300 dark:bg-gray-700 mx-5 sm:mx-10 md:mx-10 my-4 py-6 rounded-lg px-4 sm:px-6"></div>

      <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 px-5 sm:px-8 md:px-10 mb-10">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="flex flex-col justify-between gap-12 border border-gray-300 dark:border-gray-700 bg-gray-200 dark:bg-gray-800 px-4 py-4 rounded-lg"
          >
            <div>
              <div className="h-3 w-10 ml-auto bg-gray-400 dark:bg-gray-600 rounded mb-2"></div>
              <div className="h-6 w-full bg-gray-400 dark:bg-gray-600 rounded mb-3"></div>
              <div className="h-4 w-32 bg-gray-400 dark:bg-gray-600 rounded"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="h-8 w-full sm:w-28 bg-gray-400 dark:bg-gray-600 rounded"></div>
              <div className="h-8 w-full sm:w-28 bg-gray-400 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-10 lg:px-20 mb-12">
        <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
        <div className="h-4 w-48 bg-gray-400 dark:bg-gray-600 rounded"></div>
        <div className="h-8 w-24 bg-gray-400 dark:bg-gray-600 rounded"></div>
      </div>
    </div>
  );
}

export default TaskListShimmer;
