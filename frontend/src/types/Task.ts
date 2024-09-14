enum RepeatingMethod {
  DayIntervals,
  ChosenDays,
}

type Task = {
  id: number;

  title: string;
  description: string;

  generated: string;
  dayId: number;
  completed: boolean;
};

type TaskGenerator = {
  id: number;

  title: string;
  description: string;
  repeatingMethod: RepeatingMethod;
  repeatEvery: number;
  repeatDays: boolean[];

  createdAt: string;
};

export type { Task, TaskGenerator };
export { RepeatingMethod };
