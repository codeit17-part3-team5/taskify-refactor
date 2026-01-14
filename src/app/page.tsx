'use client';

import Button from './components/Button';
import Modal from './components/Modal';
import { useModal } from './hooks/useModal';

export default function Home() {
  const { open, openModal, closeModal } = useModal();

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
    </main>
  );
}
