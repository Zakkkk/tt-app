import Button from "../../components/Button.tsx";
import { Link } from "react-router-dom";
import { Input, Textarea } from "../../components/Input.tsx";
import { NotificationContainer, useNotification } from "../../components/Notification/Notification.tsx";
import ButtonGroup from "../../components/ButtonGroup.tsx";
import { useState } from "react";

const CreateRepeatingTask: React.FC = () => {
  enum RepeatingMethod {
    DayIntervals,
    ChosenDays,
  }

  const [taskName, setTaskName] = useState<string>("");
  const [taskNotes, setTaskNotes] = useState<string>("");

  const [repeatEvery, setRepeatEvery] = useState<number>(1);
  const [repeatDays, setRepeatDays] = useState<boolean[]>([false, false, false, false, false, false, false]);
  const [chosenRepeatingMethod, setChosenRepeatingMethod] = useState<RepeatingMethod>(RepeatingMethod.DayIntervals);

  const [startDate, setStartDate] = useState<string>("");

  const { showNotification, notifications } = useNotification();

  const validateForm = (): boolean => {
    // Task name needs to be between 1 and 100 characters
    // Task notes can be up to 250 characters
    // Needs to have chosen either repeat every day intervals or chosen days
    // Repeat every needs to be a positive number
    // If chosen days, needs to have at least one day selected
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

    if (chosenRepeatingMethod === RepeatingMethod.DayIntervals) {
      if (repeatEvery <= 0 || typeof repeatEvery !== "number") {
        showNotification("Must only use positive numbers.");
        return false;
      }
    } else if (chosenRepeatingMethod === RepeatingMethod.ChosenDays) {
      if (!repeatDays.includes(true)) {
        showNotification("Must have at least one day selected.");
        return false;
      }
    }

    if (!Date.parse(startDate)) {
      showNotification("Invalid start date.");
      return false;
    } else if (Date.parse(startDate) < Date.now()) {
      showNotification("Start cannot be in the past.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e?: React.FormEvent): void => {
    e!.preventDefault();

    if (!validateForm()) {
      return;
    }

    console.log(
      `
      Task Name: ${taskName}
      Task Notes: ${taskNotes}
      Repeat Every: ${repeatEvery}
      Start Date: ${startDate}
    `.trim(),
    );

    showNotification("Task created successfully!");
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

        <br />
        <br />

        <h1 className={"text-white text-3xl font-bold"}>Create a Repeating Task</h1>
        <p>Create a new repeating task.</p>
        <br />
        <form className={"flex flex-col gap-5"} onSubmit={handleSubmit}>
          <Input
            autoFocus={true}
            type="text"
            placeholder="Task Name"
            value={taskName}
            setValue={setTaskName}
            isRequired={true}
            maxLength={100}
          />
          <Textarea
            type="text"
            placeholder="Task Notes (Optional)"
            value={taskNotes}
            setValue={setTaskNotes}
            isRequired={false}
            maxLength={250}
          ></Textarea>

          <ButtonGroup isFullWidth={true}>
            <Button
              onClick={() => setChosenRepeatingMethod(RepeatingMethod.DayIntervals)}
              isPressed={chosenRepeatingMethod === RepeatingMethod.DayIntervals}
              showOutlineOnClick={false}
            >
              Day Intervals
            </Button>
            <Button
              onClick={() => setChosenRepeatingMethod(RepeatingMethod.ChosenDays)}
              isPressed={chosenRepeatingMethod === RepeatingMethod.ChosenDays}
              showOutlineOnClick={false}
            >
              Chosen Days
            </Button>
          </ButtonGroup>

          {chosenRepeatingMethod === RepeatingMethod.DayIntervals ? (
            <div>
              Repeat every{" "}
              <input
                type="number"
                value={repeatEvery}
                onChange={(e) => setRepeatEvery(parseInt(e.target.value))}
                className={
                  "p-2 bg-slate-800 text-white m-0 w-14 mx-4 rounded focus:outline outline-2 outline-white outline-offset-2 transition-all"
                }
                required
                min={0}
              />
              days.
            </div>
          ) : null}

          {chosenRepeatingMethod === RepeatingMethod.ChosenDays ? (
            <div>
              <ButtonGroup isFullWidth={true} className="w-full">
                <Button
                  onClick={() => {
                    const newRepeatDays = repeatDays.slice();
                    newRepeatDays[0] = !newRepeatDays[0];
                    setRepeatDays(newRepeatDays);
                  }}
                  isPressed={repeatDays[0]}
                  showOutlineOnClick={false}
                >
                  S
                </Button>
                <Button
                  onClick={() => {
                    const newRepeatDays = repeatDays.slice();
                    newRepeatDays[1] = !newRepeatDays[1];
                    setRepeatDays(newRepeatDays);
                  }}
                  isPressed={repeatDays[1]}
                  showOutlineOnClick={false}
                >
                  M
                </Button>
                <Button
                  onClick={() => {
                    const newRepeatDays = repeatDays.slice();
                    newRepeatDays[2] = !newRepeatDays[2];
                    setRepeatDays(newRepeatDays);
                  }}
                  isPressed={repeatDays[2]}
                  showOutlineOnClick={false}
                >
                  T
                </Button>
                <Button
                  onClick={() => {
                    const newRepeatDays = repeatDays.slice();
                    newRepeatDays[3] = !newRepeatDays[3];
                    setRepeatDays(newRepeatDays);
                  }}
                  isPressed={repeatDays[3]}
                  showOutlineOnClick={false}
                >
                  W
                </Button>
                <Button
                  onClick={() => {
                    const newRepeatDays = repeatDays.slice();
                    newRepeatDays[4] = !newRepeatDays[4];
                    setRepeatDays(newRepeatDays);
                  }}
                  isPressed={repeatDays[4]}
                  showOutlineOnClick={false}
                >
                  T
                </Button>
                <Button
                  onClick={() => {
                    const newRepeatDays = repeatDays.slice();
                    newRepeatDays[5] = !newRepeatDays[5];
                    setRepeatDays(newRepeatDays);
                  }}
                  isPressed={repeatDays[5]}
                  showOutlineOnClick={false}
                >
                  F
                </Button>
                <Button
                  onClick={() => {
                    const newRepeatDays = repeatDays.slice();
                    newRepeatDays[6] = !newRepeatDays[6];
                    setRepeatDays(newRepeatDays);
                  }}
                  isPressed={repeatDays[6]}
                  showOutlineOnClick={false}
                >
                  S
                </Button>
              </ButtonGroup>
            </div>
          ) : null}

          <div>
            Starting on{" "}
            <input
              type="date"
              className={
                "p-2 bg-slate-800 text-white m-0 mx-4 rounded focus:outline outline-2 outline-white outline-offset-2 transition-all h-10"
              }
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <Button onClick={handleSubmit} buttonRole={"primary"} className={"p-2 bg-slate-800 text-white"}>
            Create Task
          </Button>
        </form>
      </div>
    </>
  );
};

export default CreateRepeatingTask;
