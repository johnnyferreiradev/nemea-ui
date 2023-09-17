import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as RadixSelect from '@radix-ui/react-select';

import { selectContentVariants } from './variants';

import { SelectContentProps } from './types';

// import { SelectRootProps } from './types';

// const SelectRoot = forwardRef<HTMLButtonElement, SelectRootProps>(
//   (
//     {
//       className = '',
//       id,
//       placeholder,
//       icon,
//       children,
//       triggerSize = 'md',
//       triggerTheme = 'gray',
//       value,
//       defaultValue,
//       onValueChange,
//       isPopper,
//       disabled,
//       contentTheme = 'light',
//     }: SelectRootProps,
//     ref,
//   ) => {
//     return (
//       <div className={twMerge('au-select-root', className)}>
//         <RadixSelect.Root
//           value={value}
//           onValueChange={onValueChange}
//           defaultValue={defaultValue}
//           disabled={disabled}
//         >
//           <RadixSelect.Trigger
//             className={triggerVariants({
//               theme: triggerTheme,
//               size: triggerSize,
//               className,
//             })}
//             ref={ref}
//             id={id}
//           >
//             <RadixSelect.Value placeholder={placeholder} />
//             <RadixSelect.Icon asChild className="ml-2 leading-4">
//               {icon}
//             </RadixSelect.Icon>
//           </RadixSelect.Trigger>

//           <RadixSelect.Portal>
//             <RadixSelect.Content
//               className={selectContentVariants({ theme: contentTheme })}
//               position={isPopper ? 'popper' : 'item-aligned'}
//               sideOffset={5}
//             >
//               {children}
//             </RadixSelect.Content>
//           </RadixSelect.Portal>
//         </RadixSelect.Root>
//       </div>
//     );
//   },
// );

// SelectRoot.displayName = 'SelectRoot';

const SelectContent = forwardRef<
  React.ElementRef<typeof RadixSelect.Content>,
  React.ComponentPropsWithoutRef<typeof RadixSelect.Content> &
    SelectContentProps
>(
  (
    { className, children, position = 'popper', theme = 'light', ...props },
    ref,
  ) => (
    <RadixSelect.Portal>
      <RadixSelect.Content
        ref={ref}
        className={twMerge(
          position === 'popper'
            ? 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1'
            : '',
          selectContentVariants({ theme }),
          className,
        )}
        position={position}
        {...props}
      >
        <RadixSelect.Viewport
          className={twMerge(
            'p-1',
            position === 'popper'
              ? 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
              : '',
          )}
        >
          {children}
        </RadixSelect.Viewport>
      </RadixSelect.Content>
    </RadixSelect.Portal>
  ),
);

SelectContent.displayName = RadixSelect.Content.displayName;

export default SelectContent;
