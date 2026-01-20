import { type ReactNode } from 'react';

import { useDropdownContext } from '@/components/dropdown/Dropdown';

interface DropdownListProps {
  children: ReactNode;
  width?: number;
}

export const DropdownList = ({ children, width = 54 }: DropdownListProps) => {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;

  return (
    <div className={`w-${width} border border-[#D9D9D9] rounded-md`}>{isOpen && children}</div>
  );
};
