"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Input from "@/components/Input";
import { Text } from "@/components/Text";
import type { Task } from "@/lib/tasks";
import ColorPicker, { ColorOption } from "@/components/ColorPicker";
import { IconButton } from "@/components/IconButton";
import { updateTask } from "@/app/actions/task";
import NavToHomePage from "@/components/NavToHomePage";

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
      <NavToHomePage />
      <div className="space-y-4">
        <Text>Title</Text>
        <Input
          name="title"
          defaultValue={task.title}
          placeholder="Task title"
          className="bg-[#262626] border-[#333] text-[#F2F2F2]"
          required
        />
      </div>

      <div className="space-y-4">
        <Text>Title</Text>
        <input type="hidden" name="color" value={color} />
        <ColorPicker
          selectedColor={color as ColorOption}
          onColorSelect={(newColor) => setColor(newColor)}
        />
      </div>

      {error && <div className="text-red-500 text-sm">{error}</div>}

      <IconButton
        type="submit"
        disabled={isPending}
        iconPosition="trailing"
        text="Save"
        className="text-white bg-[#1E6F9F] rounded-[8px] text-[14px] h-[20px] font-[700] p-6 w-full -mt-12"
        icon="Check"
      />
    </form>
  );
}
