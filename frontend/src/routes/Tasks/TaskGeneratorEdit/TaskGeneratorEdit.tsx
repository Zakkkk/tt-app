import { NotificationContainer, useNotification } from "../../../components/Notification/Notification.tsx";
import { useEffect, useState } from "react";
import { RepeatingMethod, TaskGenerator } from "../../../types/Task.ts";
import mockTaskGenerators from "../../../mockData/taskGenerators.ts";
import Button from "../../../components/Button.tsx";
import { Link } from "react-router-dom";
import Select from "../../../components/Select.tsx";

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

  const getNameOfDays = (days: boolean[]): string => {
    let string = "";

    if (days[0]) string += "Sunday ";
    if (days[1]) string += "Monday ";
    if (days[2]) string += "Tuesday ";
    if (days[3]) string += "Wednesday ";
    if (days[4]) string += "Thursday ";
    if (days[5]) string += "Friday ";
    if (days[6]) string += "Saturday ";

    string = string.trim();

    // replace the spaces with commas and a space
    string = string.split(" ").join(", ");

    return string;
  };

  const [taskGenerators, setTaskGenerators] = useState<TaskGenerator[]>(mockTaskGenerators);

  const { showNotification, notifications } = useNotification();

  useEffect(() => {
    sortTaskGenerators(Sort.MOST_RECENT);
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
        <div className="flex">
          <h1 className={"text-3xl font-bold text-white"}>Task Generators</h1>
          <Select
            className={"ml-auto "}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => sortTaskGenerators(e.target.value as Sort)}
          >
            {Object.values(Sort).map((sort) => (
              <option key={sort} value={sort}>
                {sort}
              </option>
            ))}
          </Select>
        </div>
        <div className={""}>
          {taskGenerators.map((taskGenerator) => (
            <div key={taskGenerator.id} className={"flex flex-col gap-2 bg-gray-800 p-5 rounded-lg mt-5"}>
              <h2 className={"text-2xl font-bold text-white"}>{taskGenerator.title}</h2>

              {taskGenerator.description ? <p className={""}>{taskGenerator.description}</p> : null}

              <p>
                {taskGenerator.repeatingMethod == RepeatingMethod.DayIntervals ? (
                  `${taskGenerator.repeatEvery == 1 ? `Everyday` : `Every ${taskGenerator.repeatEvery} days`}`
                ) : ( // This assumes we are doing chosen days, fix this when there are more than 2 options
                  `On ${getNameOfDays(taskGenerator.repeatDays)}`
                )}
              </p>

              <div className={"flex gap-2"}>
                <Link to={`/tasks/${taskGenerator.id}`}>
                  <Button size={"xs"}>Edit</Button>
                </Link>
                <Button buttonRole={"danger"} size={"xs"}
                        onClick={() => removeTaskGenerator(taskGenerator.id)}>Remove</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TaskGeneratorEdit;
