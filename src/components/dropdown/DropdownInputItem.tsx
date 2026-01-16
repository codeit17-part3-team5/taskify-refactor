import type { ReactNode } from 'react';

import { useDropdownContext } from './Dropdown';

interface DropdownItemProps {
  children: ReactNode;
  height?: number;
  onSelect: () => void;
}

export const DropdownInputItem = ({ children, height = 12, onSelect }: DropdownItemProps) => {
  const { handleToggle } = useDropdownContext();

  return (
    <div className={`h-${height} flex items-center m-2 hover:bg-[#F1EFFD] rounded-sm`}>
      <button
        className="w-full text-left"
        onClick={() => {
          onSelect();
          handleToggle();
        }}
      >
        <div className="mx-4 my-2 pl-7.5">{children}</div>
      </button>
    </div>
  );
};
