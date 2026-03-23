import { Route, Routes } from "react-router";
import Layout from "./components/layout.jsx";
import HomePage from "./pages/home_page.jsx";
import TasksList from "./pages/tasks_list.jsx";
import TaskDetails from "./pages/task_details.jsx";
import ErrorPage from "./pages/error_page.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>

        <Route index element={<HomePage />} />

        <Route path="tasks">
          <Route index element={<TasksList />} />
          <Route path=":taskId" element={<TaskDetails />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App
