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

const BASE_URL = process.env.API_BASE_URL ?? "http://localhost:3001";

export async function getTasks(): Promise<TasksResponse> {
  const response = await fetch(`${BASE_URL}/api/tasks`, {
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
