import { type ReactNode } from 'react';
import Image from 'next/image';

import { useDropdownContext } from './Dropdown';

interface DropdownTriggerProps {
  label?: string | ReactNode;
  className?: string;
}

export const DropdownTrigger = ({ label, className }: DropdownTriggerProps) => {
  const { handleToggle } = useDropdownContext();

  const BASE_CLASSES =
    'flex flex-row border border-[#D9D9D9] focus:border-[#5534DA] rounded-md w-54 h-12';

  return (
    <button
      onClick={() => {
        handleToggle();
      }}
    >
      {' '}
      <div className={BASE_CLASSES} tabIndex={0}>
        <div className="w-full flex content-center justify-between items-center mx-4 my-2 ">
          {label}
          <Image src="/icons/arrow-dropdown.svg" alt="arrow" width={26} height={26} />
        </div>
      </div>
    </button>
  );
};
