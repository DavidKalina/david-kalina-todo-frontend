"use server";

import { revalidatePath } from "next/cache";

const BASE_URL = process.env.API_BASE_URL ?? "http://localhost:3001";

export async function getTask(id: string) {
  console.log({ id });
  const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch task ${id}`);
  }

  return response.json();
}

export async function createTask(formData: FormData) {
  const title = formData.get("title");
  const color = formData.get("color");

  if (!title || !color) {
    return {
      error: "Title and color are required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/api/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        color,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create task");
    }

    revalidatePath("/");
    return { success: true };
  } catch {
    return {
      error: "Failed to create task",
    };
  }
}

export async function updateTask(id: string, formData: FormData) {
  const title = formData.get("title");
  const color = formData.get("color");

  if (!title || !color) {
    return {
      error: "Title and color are required",
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        color,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    revalidatePath("/");
    return { success: true };
  } catch {
    return {
      error: "Failed to update task",
    };
  }
}

export async function toggleTaskCompletion(id: string, completed: boolean) {
  try {
    const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        completed,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    revalidatePath("/");
    return { success: true };
  } catch {
    return {
      error: "Failed to update task completion status",
    };
  }
}

export async function deleteTask(id: string) {
  try {
    const response = await fetch(`${BASE_URL}/api/tasks/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to update task");
    }

    revalidatePath("/");
    return { success: true };
  } catch {
    return {
      error: `Failed to delete task ${id}`,
    };
  }
}
