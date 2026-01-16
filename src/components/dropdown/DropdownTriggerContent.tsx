import type { ReactNode } from 'react';
import Image from 'next/image';

interface DropdownTriggerContentProps {
  className?: string;
  label?: string | ReactNode;
}

export const DropdownTriggerContent = ({ className, label }: DropdownTriggerContentProps) => {
  const BASE = 'flex flex-row border border-[#D9D9D9] rounded-md w-54 h-12';
  return (
    <div className={BASE}>
      <div className="w-full flex content-center justify-between items-center mx-4 my-2">
        {label}
        <Image src="/icons/arrow-dropdown.svg" alt="arrow" width={26} height={26} />
      </div>
    </div>
  );
};
