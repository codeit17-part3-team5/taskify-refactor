import { ComponentPropsWithoutRef, Ref, useState } from 'react';

import { cn } from '../lib/cn';

type BaseInputProps = ComponentPropsWithoutRef<'input'>;
type BaseSelectProps = ComponentPropsWithoutRef<'select'>;
type BaseTextareaProps = ComponentPropsWithoutRef<'textarea'>;

interface BaseProps<TRef extends Element = Element> {
  id: string;
  isInvalid?: boolean;
  className?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ref?: Ref<TRef>;
}

export default function Input() {}
