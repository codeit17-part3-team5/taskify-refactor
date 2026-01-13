// ChipInput.tsx
"use client";

import { useEffect, useState } from "react";
import Chip from "./Chip";
import { KeyboardEvent } from "react";

interface ChipInputProps {
  value: string[];
  onChange: (chips: string[]) => void;
  placeholder?: string;
}

type ChipItem = {
  label: string;
  colorIndex: number;
};

export default function ChipInput({ value, onChange, placeholder }: ChipInputProps) {
  const [input, setInput] = useState("");
  const [chips, setChips] = useState<ChipItem[]>([]);

  useEffect(() => {
    setChips(
      value.map((label, idx) => ({
        label,
        colorIndex: idx % 4,
      })),
    );
  }, [value]);

  const addChip = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    if (value.includes(trimmed)) return;

    onChange([...value, trimmed]);
    setInput("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      addChip(input);
    }

    if (e.key === "Backspace" && input === "" && value.length > 0) {
      e.preventDefault();
      onChange(value.slice(0, -1));
    }
  };

  const removeAt = (idx: number) => {
    onChange(value.filter((_, i) => i !== idx));
  };

  return (
    <div className="flex flex-wrap items-center gap-2 p-2 border rounded-lg focus-within:border-blue-500 min-h-[44px]">
      {chips.map((chip, idx) => (
        <Chip
          key={chip.label + idx}
          label={chip.label}
          colorIndex={chip.colorIndex}
          onRemove={() => removeAt(idx)}
        />
      ))}
      <input
        className="flex-1 min-w-[120px] h-8 px-1 outline-none text-sm bg-transparent"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder ?? "입력 후 Enter"}
      />
    </div>
  );
}
