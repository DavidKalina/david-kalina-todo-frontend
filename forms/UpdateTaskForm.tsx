"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Input from "@/components/Input";
import { Text } from "@/components/Text";
import type { Task } from "@/lib/tasks";
import ColorPicker, { ColorOption } from "@/components/ColorPicker";
import { IconButton } from "@/components/IconButton";
import { updateTask } from "@/app/actions/task";

interface UpdateTaskFormProps {
  task: Task;
}

export default function UpdateTaskForm({ task }: UpdateTaskFormProps) {
  const router = useRouter();
  const [color, setColor] = useState<string>(task.color);
  const [error, setError] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setError("");

    startTransition(async () => {
      const result = await updateTask(task.id, formData);

      if (result.error) {
        setError(result.error);
      } else {
        router.push("/");
        router.refresh();
      }
    });
  }

  return (
    <form action={handleSubmit} className="flex flex-col space-y-8">
      <div>
        <Text className="text-[#4ea8de] font-bold mb-2">Title</Text>
        <Input
          name="title"
          defaultValue={task.title}
          placeholder="Task title"
          className="bg-[#262626] border-[#333]"
          required
        />
      </div>

      <div>
        <Text className="text-[#4ea8de] font-bold mb-2">Color</Text>
        <input type="hidden" name="color" value={color} />
        <ColorPicker
          selectedColor={color as ColorOption}
          onColorSelect={(newColor) => setColor(newColor)}
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <div className="flex gap-4">
        <IconButton
          type="button"
          onClick={() => router.back()}
          text="Cancel"
          className="text-white bg-gray-600 rounded-[8px] text-xl p-6 flex-1"
          icon="X"
        />
        <IconButton
          type="submit"
          disabled={isPending}
          iconPosition="trailing"
          text={isPending ? "Updating..." : "Update Task"}
          className="text-white bg-[#1E6F9F] rounded-[8px] text-xl p-6 flex-1"
          icon="Save"
        />
      </div>
    </form>
  );
}
