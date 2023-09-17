import { useEffect, useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { User } from '@phosphor-icons/react';

import { addDarkClassToHtml, removeDarkClassFromHtml } from './utils/darkmode';

import { Switch, Form, Input, Button, Dropdown } from './lib';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
});

function App() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
    },
  });

  const [darkMode, setDarkMode] = useState(false);

  const onSubmit = () => {
    //  code...
  };

  useEffect(() => {
    if (darkMode) {
      addDarkClassToHtml();
    } else {
      removeDarkClassFromHtml();
    }
  }, [darkMode]);

  return (
    <>
      <div className="bg-light dark:bg-dark">
        <div className="flex gap-2 absolute right-4 top-4">
          <p>Dark Mode</p>
          <Switch.Root
            checked={darkMode}
            onCheckedChange={() => setDarkMode(!darkMode)}
          >
            <Switch.Thumb />
          </Switch.Root>
        </div>
        <div className="w-full h-full min-h-screen flex flex-col items-center py-16 dark:bg-grayscale-900">
          <p className="text-xl font-bold mb-4 text-center text-light bg-primary-600 p-2 rounded">
            Artemis UI
          </p>
          <h1 className="text-4xl font-bold mb-4">
            BlastZone: Component Playground 💣
          </h1>

          <div className="flex-1 w-full max-w-[900px] bg-grayscale-50/50 dark:bg-grayscale-950 rounded-xl p-4">
            <Form.Root {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 mb-8"
              >
                <Form.Field
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <Form.Item>
                      <Form.Label>Username</Form.Label>
                      <Form.Control>
                        <Input
                          placeholder="Placeholder text"
                          icon={
                            <User className="text-primary-300" weight="bold" />
                          }
                          {...field}
                        />
                      </Form.Control>
                      <Form.Description>
                        This is your public display name.
                      </Form.Description>
                      <Form.Message />
                    </Form.Item>
                  )}
                />
                <Button.Root theme="primary" size="xs" type="submit">
                  <Button.Label>Button</Button.Label>
                </Button.Root>
              </form>
            </Form.Root>

            <Dropdown.Root
              trigger={
                <Button.Root>
                  <Button.Label>Dropdown</Button.Label>
                </Button.Root>
              }
            >
              <Dropdown.Item>Opção 1</Dropdown.Item>
              <Dropdown.Item>Opção 1</Dropdown.Item>
              <Dropdown.Item>Opção 1</Dropdown.Item>
            </Dropdown.Root>

            <div className="flex gap-1 items-center mb-4">
              <p className="mr-2">xs</p>
              <Input
                placeholder="Placeholder text"
                icon={<User className="text-primary-300" weight="bold" />}
                theme="dark"
                size="xs"
              />
              <Button.Root theme="primary" size="xs">
                <Button.Label>Button</Button.Label>
              </Button.Root>
            </div>

            <div className="flex gap-1 items-center mb-4">
              <p className="mr-2 w-4">sm</p>
              <Input
                placeholder="Placeholder text"
                icon={<User className="text-primary-300" weight="bold" />}
                theme="dark"
                size="sm"
              />
              <Button.Root theme="primary" size="sm">
                <Button.Label>Button</Button.Label>
              </Button.Root>
            </div>

            <div className="flex gap-1 items-center mb-4">
              <p className="mr-2 w-4">md</p>
              <Input
                placeholder="Placeholder text"
                icon={<User className="text-primary-300" weight="bold" />}
                theme="dark"
                size="md"
              />
              <Button.Root theme="primary" size="md">
                <Button.Label>Button</Button.Label>
              </Button.Root>
            </div>

            <div className="flex gap-1 items-center mb-4">
              <p className="mr-2 w-4">lg</p>
              <Input
                placeholder="Placeholder text"
                icon={<User className="text-primary-300" weight="bold" />}
                theme="dark"
                size="lg"
              />
              <Button.Root theme="primary" size="lg">
                <Button.Label>Button</Button.Label>
              </Button.Root>
            </div>

            <div className="flex gap-1 items-center mb-4">
              <p className="mr-2 w-4">xl</p>
              <Input
                placeholder="Placeholder text"
                icon={<User className="text-primary-300" weight="bold" />}
                theme="dark"
                size="xl"
              />
              <Button.Root theme="primary" size="xl">
                <Button.Label>Button</Button.Label>
              </Button.Root>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
