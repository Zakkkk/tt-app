import Button from "../../components/Button.tsx";
import { Link } from "react-router-dom";
import { Input, Textarea } from "../../components/Input.tsx";
import { useState } from "react";
import { NotificationContainer, useNotification } from "../../components/Notification/Notification.tsx";

const CreateRepeatingTask: React.FC = () => {
  enum RepeatUnit {
    Days = "Days",
    Weeks = "Weeks",
    Months = "Months",
  }

  const [taskName, setTaskName] = useState<string>("");
  const [taskNotes, setTaskNotes] = useState<string>("");
  const [repeatEvery, setRepeatEvery] = useState<number>(1);
  const [repeatUnit, setRepeatUnit] = useState<RepeatUnit>(RepeatUnit.Days);
  const [startDate, setStartDate] = useState<string>("");

  const { showNotification, notifications } = useNotification();

  const validateForm = (): boolean => {
    // Task name needs to be between 1 and 100 characters
    // Task notes can be up to 250 characters
    // Repeat every needs to be a positive number
    // Unit needs to be one of the ones that are listed
    // Start date needs to be a valid date

    if (taskName.length < 1 || taskName.length > 100) {
      showNotification("Task name must be between 1 and 100 characters.");
      return false;
    }

    if (taskNotes.length > 250) {
      showNotification("Task notes must be less than 250 characters.");
      return false;
    }

    if (repeatEvery <= 0) {
      showNotification("Must only have positive numbers.");
      return false;
    }

    if (!Object.values(RepeatUnit).includes(repeatUnit)) {
      showNotification("Invalid repeat unit.");
      return false;
    }

    if (!Date.parse(startDate)) {
      showNotification("Invalid start date.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e?: React.FormEvent): void => {
    e!.preventDefault();

    if (!validateForm()) {
      return;
    }

    showNotification("Task created successfully!");

    console.log(`
      Task Name: ${taskName}
      Task Notes: ${taskNotes}
      Repeat Every: ${repeatEvery}
      Repeat Unit: ${repeatUnit}
      Start Date: ${startDate}
    `.trim());
  };

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
        <h1 className={"text-white text-3xl font-bold"}>Create a Repeating Task</h1>
        <p>
          Create a new repeating task.
        </p>

        <br />

        <form className={"flex flex-col gap-5"} onSubmit={handleSubmit}>
          <Input autoFocus={true} type="text" placeholder="Task Name" value={taskName} setValue={setTaskName}
                 isRequired={true} maxLength={100} />
          <Textarea type="text" placeholder="Task Notes (Optional)" value={taskNotes} setValue={setTaskNotes}
                    isRequired={false} maxLength={250}></Textarea>
          <div>

            Repeat every <input type="number"
                                value={repeatEvery}
                                onChange={(e) => setRepeatEvery(parseInt(e.target.value))}
                                className={"p-2 bg-slate-800 text-white m-0 w-14 mx-4 rounded focus:outline outline-2 outline-white outline-offset-2 transition-all"}
                                required min={0} />
            <select
              className={"p-2 bg-slate-800 text-white h-10 rounded focus:outline outline-2 outline-white outline-offset-2 transition-all"}
              onChange={(e) => setRepeatUnit(e.target.value as RepeatUnit)}>
              {Object.values(RepeatUnit).map((unit) => (
                <option key={unit}>{unit}</option>
              ))}
            </select>
          </div>

          <div>
            Starting on <input type="date"
                               className={"p-2 bg-slate-800 text-white m-0 mx-4 rounded focus:outline outline-2 outline-white outline-offset-2 transition-all h-10"}
                               value={startDate}
                               onChange={(e) => setStartDate(e.target.value)}
          />
          </div>
          <Button onClick={handleSubmit} buttonRole={"primary"} className={"p-2 bg-slate-800 text-white"}>Create
            Task</Button>
        </form>
      </div>
    </>
  );
};

export default CreateRepeatingTask;