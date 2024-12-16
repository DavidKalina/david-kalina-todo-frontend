"use client";

import { createTask } from "@/app/actions/task";
import ColorPicker, { ColorOption } from "@/components/ColorPicker";
import { IconButton } from "@/components/IconButton";
import Input from "@/components/Input";
import NavToHomePage from "@/components/NavToHomePage";
import { Text } from "@/components/Text";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function CreateTaskForm() {
  const router = useRouter();
  const [color, setColor] = useState<string>("blue");
  const [error, setError] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    setError("");

    startTransition(async () => {
      const result = await createTask(formData);

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
          autoFocus
          name="title"
          placeholder="Ex: Brush your teeth"
          className="bg-[#262626] border-[#333] text-[#F2F2F2]"
          required
        />
      </div>

      <div className="space-y-4">
        <Text>Color</Text>
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
        text={isPending ? "Creating..." : "Add Task"}
        className="text-white bg-[#1E6F9F] rounded-[8px] text-[14px] h-[20px] font-[700] p-6 w-full -mt-12"
        icon="PlusCircle"
      />
    </form>
  );
}
