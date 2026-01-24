'use client';

import { useState } from 'react';

import ActionChip from '@/components/chip/actionchip/ActionChip';
import ColorChip from '@/components/chip/colorchip/ColorChip';
import StateChipList from '@/components/chip/statechip/StateChipList';
import ChipInput from '@/components/chip/textchip/ChipInput';

const handleClick = () => {};

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

        <div className="flex flex-col gap-2 mt-4 ml-4">
          <p className="text-[#5534DA]">Plus 버튼</p>
          <ActionChip variant="task" label="할 일 생성 이미지 추가" onClick={handleClick} />
          <ActionChip variant="avatar" label="프로필 이미지 추가" onClick={handleClick} />
          <ActionChip variant="column" text="새 컬럼 만들기" onClick={handleClick} />
        </div>
      </section>
    </main>
  );
}
