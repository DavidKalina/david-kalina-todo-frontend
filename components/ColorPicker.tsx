"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { useState } from "react";

export type ColorOption =
  | "blue"
  | "red"
  | "orange"
  | "yellow"
  | "green"
  | "indigo"
  | "purple"
  | "pink"
  | "brown"
  | undefined;

const colorVariants = {
  red: "bg-red-500 hover:bg-red-600",
  orange: "bg-orange-500 hover:bg-orange-600",
  yellow: "bg-yellow-500 hover:bg-yellow-600",
  green: "bg-green-500 hover:bg-green-600",
  blue: "bg-blue-500 hover:bg-blue-600",
  indigo: "bg-indigo-500 hover:bg-indigo-600",
  purple: "bg-purple-500 hover:bg-purple-600",
  pink: "bg-pink-500 hover:bg-pink-600",
  brown: "bg-amber-800 hover:bg-amber-900",
};

const colorPickerVariants = cva(
  "w-12 h-12 rounded-full transition-transform duration-200 cursor-pointer ring-offset-2",
  {
    variants: {
      selected: {
        true: "ring-2 ring-white scale-110",
        false: "hover:scale-105",
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);

interface ColorPickerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof colorPickerVariants> {
  onColorSelect?: (color: keyof typeof colorVariants) => void;
  selectedColor?: keyof typeof colorVariants;
}

const ColorPicker = ({ className, onColorSelect, selectedColor, ...props }: ColorPickerProps) => {
  const [selected, setSelected] = useState<keyof typeof colorVariants | undefined>(selectedColor);

  const handleColorSelect = (color: keyof typeof colorVariants) => {
    setSelected(color);
    onColorSelect?.(color);
  };

  return (
    <div className="flex gap-2" {...props}>
      {Object.entries(colorVariants).map(([color, classes]) => (
        <button
          key={color}
          onClick={() => handleColorSelect(color as keyof typeof colorVariants)}
          className={cn(
            className,
            colorPickerVariants({
              selected: selected === color,
              className: classes,
            })
          )}
          aria-label={`Select ${color}`}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
