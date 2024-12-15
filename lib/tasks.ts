export type Task = {
  id: string;
  title: string;
  color: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type TasksResponse = {
  tasks: Task[];
  summary: {
    total: number;
    completed: number;
  };
};

export async function getTasks(): Promise<TasksResponse> {
  const response = await fetch("http://localhost:3001/api/tasks", {
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store", // Disable caching for real-time data
  });

  if (!response.ok) {
    throw new Error("Failed to fetch tasks");
  }

  return response.json();
}
