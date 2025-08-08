"use client";

import { useState } from "react";

export default function HomePage() {
  const options = ["a", "b", "c", "d"];

  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#003da0] to-[#15162c] p-5">
      {selectedOption ? (
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex items-center justify-center rounded-2xl bg-white p-20 text-9xl shadow-2xl">
            {selectedOption.toUpperCase()}
          </div>
          <button
            className="rounded-2xl text-9xl"
            onClick={() => setSelectedOption(null)}
          >
            🔄
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-7">
          {options.map((option) => (
            <button
              className="flex items-center justify-center rounded-2xl bg-white p-15 text-9xl shadow-2xl"
              key={option}
              onClick={() => setSelectedOption(option)}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </main>
  );
}
