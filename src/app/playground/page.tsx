"use client";

import { useState } from "react";

import ChipInput from "@/components/textchip/ChipInput";

export default function PlaygroundPage() {
  const [projects, setProjects] = useState<string[]>(["프론트", "디자인"]);

  return (
    <main>
      <h1>공용 컴포넌트 테스트</h1>
      <p className="mb-14">확인용 페이지 (추후 삭제)</p>

      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-2 w-90 px-2"
        >
          <label htmlFor="todo-create-tags" className="typo-14-m text-black font-bold">
            태그
          </label>
          <ChipInput value={projects} onChange={setProjects} placeholder="입력 후 Enter" />
        </form>
      </section>
    </main>
  );
}
