'use client';

import { useState } from 'react';

import ColorChip from '@/components/colorchip/ColorChip';
import StateChipList from '@/components/statechip/StateChipList';
import ChipInput from '@/components/textchip/ChipInput';

export default function PlaygroundPage() {
  const [projects, setProjects] = useState<string[]>(['Test']);

  return (
    <main>
      <h1>공용 컴포넌트 테스트</h1>
      <p className="mb-14">확인용 페이지 (추후 삭제)</p>

      <section>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="space-y-2 w-[360px] px-2 mb-7"
        >
          <label htmlFor="todo-create-tags" className="typo-14-m text-black font-bold">
            태그
          </label>
          <ChipInput value={projects} onChange={setProjects} placeholder="입력 후 Enter" />
        </form>

        <ColorChip />
        <div className="mt-4">
          <StateChipList />
        </div>
      </section>
    </main>
  );
}
