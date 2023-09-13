import { useEffect, useState } from 'react';

import { addDarkClassToHtml, removeDarkClassFromHtml } from './utils/darkmode';

import { Switch } from './lib';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      addDarkClassToHtml();
    } else {
      removeDarkClassFromHtml();
    }
  }, [darkMode]);

  return (
    <>
      <div className="bg-white dark:bg-[var(--dark-color)]">
        <div className="flex gap-2 absolute right-4 top-4">
          <p className="text-black dark:text-white">Dark Mode</p>
          <Switch.Root
            checked={darkMode}
            onCheckedChange={() => setDarkMode(!darkMode)}
          >
            <Switch.Thumb />
          </Switch.Root>
        </div>
        <div className="App w-full h-full min-h-screen flex flex-col items-center py-16 dark:bg-[var(--grayscale-color-900)]">
          <p className="text-xl font-bold mb-4 text-center text-black dark:text-white">
            Artemis UI
          </p>
          <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">
            BlastZone: Component Playground 💣
          </h1>

          <div className="flex-1 w-full max-w-[900px] bg-slate-50/50 dark:bg-slate-950 rounded-xl p-4"></div>
        </div>
      </div>
    </>
  );
}

export default App;
