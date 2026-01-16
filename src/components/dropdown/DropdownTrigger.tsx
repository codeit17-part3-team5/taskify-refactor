import { type ReactNode } from 'react';

import { useDropdownContext } from './Dropdown';

interface DropdownTriggerProps {
  children: ReactNode;
  className?: string;
}

export const DropdownTrigger = ({ children, className }: DropdownTriggerProps) => {
  const { handleToggle } = useDropdownContext();

  return (
    <button
      onClick={() => {
        handleToggle();
      }}
    >
      {children}
    </button>
  );
};
