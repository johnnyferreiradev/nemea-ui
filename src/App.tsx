import { useEffect, useState } from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { User } from '@phosphor-icons/react';

import { addDarkClassToHtml, removeDarkClassFromHtml } from './utils/darkmode';

import { Switch, Form } from './lib';

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

  // const onSubmit = (values: z.infer<typeof formSchema>) => {
  //   console.log(values.username);
  // };

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
                // onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <Form.Field
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <Form.Item>
                      <Form.Label>Username</Form.Label>
                      <Form.Control icon={<User />}>
                        <input placeholder="input" {...field} />
                      </Form.Control>
                      <Form.Description>
                        This is your public display name.
                      </Form.Description>
                      <Form.Message />
                    </Form.Item>
                  )}
                />
              </form>
            </Form.Root>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
