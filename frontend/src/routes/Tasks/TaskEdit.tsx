import { NotificationContainer, useNotification } from "../../components/Notification/Notification.tsx";
import { useState } from "react";
import Task from "../../types/Task.ts";
import Button from "../../components/Button.tsx";
import { Link } from "react-router-dom";
import Select from "../../components/Select.tsx";

const TaskEdit: React.FC = () => {
  enum Sort {
    MOST_RECENT = "most recent",
    LEAST_RECENT = "least recent",
    ALPHABETICAL = "alphabetical",
  }

  const sortTasks = (sort: Sort) => {
    switch (sort) {
      case Sort.MOST_RECENT:
        setTasks((prevTasks) =>
          [...prevTasks].sort((a, b) => {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
          }),
        );
        break;
      case Sort.LEAST_RECENT:
        setTasks((prevTasks) =>
          [...prevTasks].sort((a, b) => {
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
          }),
        );
        break;
      case Sort.ALPHABETICAL:
        setTasks((prevTasks) =>
          [...prevTasks].sort((a, b) => {
            return a.title.localeCompare(b.title);
          }),
        );
    }
  };

  const removeTask = (id: number) => {
    // Need to update the backend

    showNotification("Task removed");
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Task 1",
      description: "",
      starting_at: "2021-09-01T00:00:00Z",
      every: 1,
      unit: "day",
      created_at: "2021-09-01T00:00:00Z",
      updated_at: "2021-09-01T00:00:00Z",
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      starting_at: "2021-09-02T00:00:00Z",
      every: 7,
      unit: "day",
      created_at: "2021-09-02T00:00:00Z",
      updated_at: "2021-09-02T00:00:00Z",
    },
  ]);

  const { showNotification, notifications } = useNotification();

  return (
    <>
      <NotificationContainer notifications={notifications} />
      <div className={"p-5"}>
        <Link to={"/tasks"}>
          <Button>
            <span className={"material-symbols-outlined text-white"}>arrow_back</span>
            Back
          </Button>
        </Link>
        <br /> <br />
        <div className="flex">
          <h1 className={"text-3xl font-bold text-white"}>Repeating Tasks</h1>
          <Select
            className={"ml-auto text-xs"}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => sortTasks(e.target.value as Sort)}
          >
            {Object.values(Sort).map((sort) => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </Select>
        </div>
      </div>
    </>
  );
};

export default TaskEdit;
