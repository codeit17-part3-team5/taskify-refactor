'use client';

import { useState } from 'react';

import Button from './components/Button';
import Input from './components/input';
import Modal from './components/Modal';
import { useModal } from './hooks/useModal';

export default function Home() {
  const { open, openModal, closeModal } = useModal();
  const [category, setCategory] = useState('');

  return (
    <main className="p-10">
      <h1 className="typo-32-b mb-4">Taskify</h1>
      <div className="w-35">
        <p className="bg-primary-tw text-white typo-32-m p-2">
          Refactoring Start (dev 브랜치에 병합)
        </p>
      </div>
      <Modal open={open} onClose={closeModal} closeOnEsc closeOnOverlayClick lockScroll>
        <div className="w-[420px] rounded-lg bg-white p-6">
          <h2 className="text-lg font-semibold">제목</h2>
          <p className="mt-2 text-sm text-gray-600">내용</p>

          <div className="mt-6 flex justify-end gap-2">
            <button onClick={closeModal}>닫기</button>
            <button>확인</button>
          </div>
        </div>
      </Modal>
      <Button className="w-30 h-12" variant="w" onClick={openModal}>
        로그인
      </Button>
      <Input id="email" type="email" placeholder="이메일" />
      <Input id="password" type="password" placeholder="비밀번호" />.
      <Input as="textarea" id="description" placeholder="댓글" />
      <Input
        as="select"
        id="category"
        value={category}
        placeholderOption="선택"
        options={[
          { value: 1, label: '옵션 1' },
          { value: 2, label: '옵션 2' },
        ]}
        onChange={(e) => setCategory(String(e.target.value))}
      />
    </main>
  );
}
