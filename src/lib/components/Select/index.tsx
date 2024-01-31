import * as RadixSelect from '@radix-ui/react-select';

import SelectItem from './SelectItem';
import SelectLabel from './SelectLabel';
import SelectSeparator from './SelectSeparator';
import SelectContent from './SelectContent';
import SelectTrigger from './SelectTrigger';
import SelectValue from './SelectValue';

const SelectRoot = RadixSelect.Root;

const SelectGroup = RadixSelect.Group;

export const Select = {
  Root: SelectRoot,
  Trigger: SelectTrigger,
  Content: SelectContent,
  Item: SelectItem,
  Label: SelectLabel,
  Separator: SelectSeparator,
  Group: SelectGroup,
  Value: SelectValue,
};
