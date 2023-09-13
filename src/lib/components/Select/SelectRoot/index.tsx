import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as RadixSelect from '@radix-ui/react-select';

import { triggerVariants, selectContentVariants } from './variants';

import { SelectRootProps } from './types';

const SelectRoot = forwardRef<HTMLButtonElement, SelectRootProps>(
  (
    {
      className = '',
      id,
      placeholder,
      icon,
      children,
      triggerSize = 'md',
      triggerTheme = 'gray',
      value,
      defaultValue,
      onValueChange,
      isPopper,
      disabled,
      contentTheme = 'white',
    }: SelectRootProps,
    ref,
  ) => {
    return (
      <div className={twMerge('au-select-root', className)}>
        <RadixSelect.Root
          value={value}
          onValueChange={onValueChange}
          defaultValue={defaultValue}
          disabled={disabled}
        >
          <RadixSelect.Trigger
            className={triggerVariants({
              theme: triggerTheme,
              size: triggerSize,
              className,
            })}
            ref={ref}
            id={id}
          >
            <RadixSelect.Value placeholder={placeholder} />
            <RadixSelect.Icon asChild className="ml-2 leading-4">
              {icon}
            </RadixSelect.Icon>
          </RadixSelect.Trigger>

          <RadixSelect.Portal>
            <RadixSelect.Content
              className={selectContentVariants({ theme: contentTheme })}
              position={isPopper ? 'popper' : 'item-aligned'}
              sideOffset={5}
            >
              {children}
            </RadixSelect.Content>
          </RadixSelect.Portal>
        </RadixSelect.Root>
      </div>
    );
  },
);

SelectRoot.displayName = 'SelectRoot';

export default SelectRoot;
