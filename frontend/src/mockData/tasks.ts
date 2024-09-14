import { Task } from "../types/Task";

// Mock tasks
const mockTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    description: "Description 1",
    generated: "2021-01-01",
    dayId: 1,
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    description: "Description 2",
    generated: "2021-01-03",
    dayId: 1,
    completed: false,
  },
  {
    id: 3,
    title: "Task 3",
    description: "Description 3",
    generated: "2021-01-02",
    dayId: 1,
    completed: false,
  },
];

export default mockTasks;
