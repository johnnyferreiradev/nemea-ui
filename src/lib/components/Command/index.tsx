import { CommandRoot } from './CommandRoot';
import { CommandDialog } from './CommandDialog';
import { CommandInput } from './CommandInput';
import { CommandList } from './CommandList';
import { CommandEmpty } from './CommandEmpty';
import { CommandGroup } from './CommandGroup';
import { CommandItem } from './CommandItem';
import { CommandShortcut } from './CommandShortcut';
import { CommandSeparator } from './CommandSeparator';

export const Command = {
  Root: CommandRoot,
  Dialog: CommandDialog,
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
  Shortcut: CommandShortcut,
  Separator: CommandSeparator,
};
