import { ForwardRefExoticComponent, RefAttributes } from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export type ScrollBarProps = ForwardRefExoticComponent<
  ScrollAreaPrimitive.ScrollAreaScrollbarProps & RefAttributes<HTMLDivElement>
>;
