import { TaskGenerator, RepeatingMethod } from "../types/Task";

// mock data
const taskGenerators: TaskGenerator[] = [
  {
    id: 1,
    title: "Daily Task",
    description: "This task repeats every day.",
    repeatingMethod: RepeatingMethod.DayIntervals,
    repeatEvery: 1,
    repeatDays: [false, false, false, false, false, false, false],
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 2,
    title: "Weekly Task",
    description: "This task repeats every week.",
    repeatingMethod: RepeatingMethod.DayIntervals,
    repeatEvery: 7,
    repeatDays: [false, false, false, false, false, false, false],
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 3,
    title: "Do homework",
    description: "",
    repeatingMethod: RepeatingMethod.DayIntervals,
    repeatEvery: 5,
    repeatDays: [false, false, false, false, false, false, false],
    createdAt: "2021-01-01T00:00:00.000Z",
  },
  {
    id: 4,
    title: "Go to the gym",
    description: "",
    repeatingMethod: RepeatingMethod.ChosenDays,
    repeatEvery: 0,
    repeatDays: [false, true, false, true, false, true, false],
    createdAt: "2021-01-01T00:00:00.000Z",
  },
];

export default taskGenerators;
