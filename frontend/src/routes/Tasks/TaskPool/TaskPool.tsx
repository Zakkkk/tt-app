import { Link } from "react-router-dom";
import Button from "../../../components/Button.tsx";
import Select from "../../../components/Select.tsx";
import { Task } from "../../../types/Task.ts";
import mockTasks from "../../../mockData/tasks.ts";
import { useEffect, useState } from "react";
import { NotificationContainer, useNotification } from "../../../components/Notification/Notification.tsx";

const TaskPool: React.FC = () => {
  enum Sort {
    MOST_RECENT = "most recent",
    LEAST_RECENT = "least recent",
    ALPHABETICAL = "alphabetical",
  }

  const { showNotification, notifications } = useNotification();

  const [tasks, setTasks] = useState<Task[]>(mockTasks);

  const sortTasks = (sort: Sort) => {
    switch (sort) {
      case Sort.MOST_RECENT:
        setTasks((prevTasks) =>
          [...prevTasks].sort((a, b) => {
            return new Date(b.generated).getTime() - new Date(a.generated).getTime();
          }),
        );
        break;
      case Sort.LEAST_RECENT:
        setTasks((prevTasks) =>
          [...prevTasks].sort((a, b) => {
            return new Date(a.generated).getTime() - new Date(b.generated).getTime();
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

  const moveTaskToLog = (id: number) => {
    // Need to update the backend

    showNotification("Task moved to log");
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  useEffect(() => {
    sortTasks(Sort.MOST_RECENT);
  }, []);

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
        <div className={"flex"}>
          <h1 className={"text-white text-3xl font-bold"}>Task Pool</h1>
          <Select
            className={"ml-auto"}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => sortTasks(e.target.value as Sort)}
          >
            {Object.values(Sort).map((sort) => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </Select>
        </div>
        <div className={"flex flex-col"}>
          {tasks.map((task) => {
            // const date = new Date(task.created_at);
            // const dateString = `${date.getDate()}/${date.getMonth() + 1}`;

            return (
              <div key={task.id} className={"p-3 bg-gray-800 rounded-lg mt-4"}>
                <div className={"flex"}>
                  <h2 className={"text-white text-xl font-bold"}>{task.title}</h2>
                  <span
                    onClick={() => removeTask(task.id)}
                    className={"material-symbols-outlined active:text-white transition text-3xl ml-auto"}
                  >
                    close
                  </span>
                </div>
                {/*<p className={""}>Generated {dateString}</p>*/}
                <p>{task.description}</p>
                <Button onClick={() => moveTaskToLog(task.id)} className={"mt-2"} size={"sm"}>
                  Add to log
                </Button>
              </div>
            );
          })}
          <Button className={"mt-4"}>Load more</Button>
        </div>
      </div>
    </>
  );
};

export default TaskPool;
