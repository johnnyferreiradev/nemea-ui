import * as RadixToast from '@radix-ui/react-toast';
import { SwipeDirection } from '@radix-ui/react-toast';

import { toasterViewport, toasterRoot } from './variants';

import { ToasterRootProps } from './types';

export default function ToasterRoot({
  className = '',
  children,
  onOpenChange,
  open,
  duration = 5000,
  defaultOpen = false,
  trigger,
  theme = 'warning',
  position = 'top-center',
}: ToasterRootProps) {
  const swipeDirections = {
    'top-right': 'right',
    'top-center': 'up',
    'top-left': 'left',
    'bottom-right': 'right',
    'bottom-center': 'down',
    'bottom-left': 'left',
  };

  return (
    <RadixToast.Provider
      duration={duration}
      swipeDirection={
        swipeDirections[
          position as keyof typeof swipeDirections
        ] as SwipeDirection
      }
    >
      {trigger}
      <RadixToast.Root
        className={toasterRoot({ theme, className })}
        open={open}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
      >
        {children}
      </RadixToast.Root>

      <div data-swipe-direction="up"></div>

      <RadixToast.Viewport className={toasterViewport({ position })} />
    </RadixToast.Provider>
  );
}
