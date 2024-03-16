import type { ConfigEnv, UserConfig } from 'vite';
import { defineConfig, mergeConfig } from 'vite';
import tsConfigPaths from 'vite-tsconfig-paths';
import { getBuildConfig, getBuildDefine, external, pluginHotRestart } from './vite.base.config';

import path from 'path';

// https://vitejs.dev/config
export default defineConfig((env) => {
  const forgeEnv = env as ConfigEnv<'build'>;
  const { forgeConfigSelf } = forgeEnv;
  const define = getBuildDefine(forgeEnv);
  const config: UserConfig = {
    build: {
      lib: {
        entry: forgeConfigSelf.entry!,
        fileName: () => '[name].js',
        formats: ['cjs'],
      },
      rollupOptions: {
        external,
      },
    },
    plugins: [pluginHotRestart('restart'), tsConfigPaths()],
    define,
    resolve: {
      // Load the Node.js entry.
      mainFields: ['module', 'jsnext:main', 'jsnext'],
    },
    root: path.resolve(__dirname, '.'),
  };

  return mergeConfig(getBuildConfig(forgeEnv), config);
});
