import type { ReactNode } from 'react';
import Image from 'next/image';

import checkItem from '@/components/dropdown/assets/check-item.svg';

import { useDropdownContext } from './Dropdown';

interface DropdownItemProps {
  children: ReactNode;
  height?: number;
  isSelected: boolean;
  onSelect: () => void;
}

export const DropdownInputItem = ({
  children,
  height = 12,
  isSelected,
  onSelect,
}: DropdownItemProps) => {
  const { handleToggle } = useDropdownContext();

  return (
    <div className={`h-${height} flex items-center hover:bg-[#F1EFFD] rounded-sm`}>
      <button
        className="w-full text-left"
        onClick={() => {
          onSelect();
          handleToggle();
        }}
      >
        <div className="mx-4 my-2">
          {isSelected ? (
            <div className="flex">
              <Image src={checkItem} alt="선택" />
              <div className="pl-2">{children}</div>
            </div>
          ) : (
            <div className="pl-7.5">{children}</div>
          )}
        </div>
      </button>
    </div>
  );
};
