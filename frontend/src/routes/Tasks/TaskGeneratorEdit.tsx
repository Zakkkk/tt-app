import { NotificationContainer, useNotification } from "../../components/Notification/Notification.tsx";
import { useState } from "react";
import { TaskGenerator } from "../../types/Task.ts";
import mockTaskGenerators from "../../mockData/taskGenerators";
import Button from "../../components/Button.tsx";
import { Link } from "react-router-dom";
import Select from "../../components/Select.tsx";

const TaskGeneratorEdit: React.FC = () => {
  enum Sort {
    MOST_RECENT = "most recent",
    LEAST_RECENT = "least recent",
    ALPHABETICAL = "alphabetical",
  }

  const sortTaskGenerators = (sort: Sort) => {
    switch (sort) {
      case Sort.MOST_RECENT:
        setTaskGenerators((prevTaskGenerators) =>
          [...prevTaskGenerators].sort((a, b) => {
            return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
          }),
        );
        break;
      case Sort.LEAST_RECENT:
        setTaskGenerators((prevTaskGenerators) =>
          [...prevTaskGenerators].sort((a, b) => {
            return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
          }),
        );
        break;
      case Sort.ALPHABETICAL:
        setTaskGenerators((prevTaskGenerators) =>
          [...prevTaskGenerators].sort((a, b) => {
            return a.title.localeCompare(b.title);
          }),
        );
    }
  };

  const removeTaskGenerator = (id: number) => {
    // Need to update the backend

    showNotification("Task removed");
    setTaskGenerators((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const [taskGenerators, setTaskGenerators] = useState<TaskGenerator[]>(mockTaskGenerators);

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
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => sortTaskGenerators(e.target.value as Sort)}
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

export default TaskGeneratorEdit;
