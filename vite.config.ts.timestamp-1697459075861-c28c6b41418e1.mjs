// vite.config.ts
import react from "file:///home/johnny/Github/Cashflow/nemea-ui/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///home/johnny/Github/Cashflow/nemea-ui/node_modules/vite/dist/node/index.js";
import dts from "file:///home/johnny/Github/Cashflow/nemea-ui/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///home/johnny/Github/Cashflow/nemea-ui/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///home/johnny/Github/Cashflow/nemea-ui/node_modules/vite-tsconfig-paths/dist/index.mjs";
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ["src/lib/"]
    }),
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ["./src/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    })
  ]
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9qb2hubnkvR2l0aHViL0Nhc2hmbG93L25lbWVhLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvaG9tZS9qb2hubnkvR2l0aHViL0Nhc2hmbG93L25lbWVhLXVpL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9ob21lL2pvaG5ueS9HaXRodWIvQ2FzaGZsb3cvbmVtZWEtdWkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgRXNMaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWxpbnRlcic7XG5pbXBvcnQgdHNDb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcbmNvbnN0IHsgRXNMaW50ZXIsIGxpbnRlclBsdWdpbiB9ID0gRXNMaW50O1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XG4gIHBsdWdpbnM6IFtcbiAgICBkdHMoe1xuICAgICAgaW5jbHVkZTogWydzcmMvbGliLyddLFxuICAgIH0pLFxuICAgIHJlYWN0KCksXG4gICAgdHNDb25maWdQYXRocygpLFxuICAgIGxpbnRlclBsdWdpbih7XG4gICAgICBpbmNsdWRlOiBbJy4vc3JjLyoqLyoue3RzLHRzeH0nXSxcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxuICAgIH0pLFxuICBdLFxufSkpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFpUyxPQUFPLFdBQVc7QUFDblQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjtBQUMxQixJQUFNLEVBQUUsVUFBVSxhQUFhLElBQUk7QUFHbkMsSUFBTyxzQkFBUSxhQUFhLENBQUMsZUFBZTtBQUFBLEVBQzFDLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxVQUFVO0FBQUEsSUFDdEIsQ0FBQztBQUFBLElBQ0QsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLHFCQUFxQjtBQUFBLE1BQy9CLFNBQVMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3ZDLENBQUM7QUFBQSxFQUNIO0FBQ0YsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
