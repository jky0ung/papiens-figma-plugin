// vite.config.plugin.ts
import path from "node:path";
import { defineConfig } from "file:///Users/pruki/src/papiens/figma-plugin-react-vite/node_modules/.pnpm/vite@5.0.11_@types+node@18.15.11_sass@1.60.0/node_modules/vite/dist/node/index.js";
import generateFile from "file:///Users/pruki/src/papiens/figma-plugin-react-vite/node_modules/.pnpm/vite-plugin-generate-file@0.1.1/node_modules/vite-plugin-generate-file/dist/index.mjs";
import { viteSingleFile } from "file:///Users/pruki/src/papiens/figma-plugin-react-vite/node_modules/.pnpm/vite-plugin-singlefile@0.13.5_rollup@4.17.2_vite@5.0.11/node_modules/vite-plugin-singlefile/dist/esm/index.js";

// figma.manifest.ts
var figma_manifest_default = {
  name: "@papiens/figma-plugin",
  id: "1222852692367737510",
  api: "1.0.0",
  main: "plugin.js",
  ui: "index.html",
  capabilities: ["codegen"],
  enableProposedApi: false,
  editorType: ["figma", "figjam", "dev"],
  codegenLanguages: [
    {
      label: "Language Label",
      value: "language-value"
    }
  ]
};

// vite.config.plugin.ts
var vite_config_plugin_default = defineConfig(({ mode }) => ({
  plugins: [
    viteSingleFile(),
    generateFile({
      type: "json",
      output: "./manifest.json",
      data: figma_manifest_default
    })
  ],
  build: {
    minify: mode === "production",
    sourcemap: mode !== "production" ? "inline" : false,
    target: "es2017",
    emptyOutDir: false,
    outDir: path.resolve("dist"),
    rollupOptions: {
      input: path.resolve("src/plugin/plugin.ts"),
      output: {
        entryFileNames: "plugin.js"
      }
    }
  },
  resolve: {
    alias: {
      "@common": path.resolve("src/common"),
      "@plugin": path.resolve("src/plugin")
    }
  }
}));
export {
  vite_config_plugin_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcucGx1Z2luLnRzIiwgImZpZ21hLm1hbmlmZXN0LnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3BydWtpL3NyYy9wYXBpZW5zL2ZpZ21hLXBsdWdpbi1yZWFjdC12aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcHJ1a2kvc3JjL3BhcGllbnMvZmlnbWEtcGx1Z2luLXJlYWN0LXZpdGUvdml0ZS5jb25maWcucGx1Z2luLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9wcnVraS9zcmMvcGFwaWVucy9maWdtYS1wbHVnaW4tcmVhY3Qtdml0ZS92aXRlLmNvbmZpZy5wbHVnaW4udHNcIjtpbXBvcnQgcGF0aCBmcm9tIFwibm9kZTpwYXRoXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IGdlbmVyYXRlRmlsZSBmcm9tIFwidml0ZS1wbHVnaW4tZ2VuZXJhdGUtZmlsZVwiO1xuaW1wb3J0IHsgdml0ZVNpbmdsZUZpbGUgfSBmcm9tIFwidml0ZS1wbHVnaW4tc2luZ2xlZmlsZVwiO1xuaW1wb3J0IGZpZ21hTWFuaWZlc3QgZnJvbSBcIi4vZmlnbWEubWFuaWZlc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKCh7IG1vZGUgfSkgPT4gKHtcbiAgcGx1Z2luczogW1xuICAgIHZpdGVTaW5nbGVGaWxlKCksXG4gICAgZ2VuZXJhdGVGaWxlKHtcbiAgICAgIHR5cGU6IFwianNvblwiLFxuICAgICAgb3V0cHV0OiBcIi4vbWFuaWZlc3QuanNvblwiLFxuICAgICAgZGF0YTogZmlnbWFNYW5pZmVzdCxcbiAgICB9KSxcbiAgXSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6IG1vZGUgPT09ICdwcm9kdWN0aW9uJyxcbiAgICBzb3VyY2VtYXA6IG1vZGUgIT09ICdwcm9kdWN0aW9uJyA/ICdpbmxpbmUnIDogZmFsc2UsXG4gICAgdGFyZ2V0OiAnZXMyMDE3JyxcbiAgICBlbXB0eU91dERpcjogZmFsc2UsXG4gICAgb3V0RGlyOiBwYXRoLnJlc29sdmUoXCJkaXN0XCIpLFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiBwYXRoLnJlc29sdmUoJ3NyYy9wbHVnaW4vcGx1Z2luLnRzJyksXG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdwbHVnaW4uanMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQGNvbW1vblwiOiBwYXRoLnJlc29sdmUoXCJzcmMvY29tbW9uXCIpLFxuICAgICAgXCJAcGx1Z2luXCI6IHBhdGgucmVzb2x2ZShcInNyYy9wbHVnaW5cIiksXG4gICAgfSxcbiAgfSxcbn0pKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL3BydWtpL3NyYy9wYXBpZW5zL2ZpZ21hLXBsdWdpbi1yZWFjdC12aXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvcHJ1a2kvc3JjL3BhcGllbnMvZmlnbWEtcGx1Z2luLXJlYWN0LXZpdGUvZmlnbWEubWFuaWZlc3QudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL3BydWtpL3NyYy9wYXBpZW5zL2ZpZ21hLXBsdWdpbi1yZWFjdC12aXRlL2ZpZ21hLm1hbmlmZXN0LnRzXCI7Ly8gaHR0cHM6Ly93d3cuZmlnbWEuY29tL3BsdWdpbi1kb2NzL21hbmlmZXN0L1xuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIkBwYXBpZW5zL2ZpZ21hLXBsdWdpblwiLFxuICBpZDogXCIxMjIyODUyNjkyMzY3NzM3NTEwXCIsXG4gIGFwaTogXCIxLjAuMFwiLFxuICBtYWluOiBcInBsdWdpbi5qc1wiLFxuICB1aTogXCJpbmRleC5odG1sXCIsXG4gIGNhcGFiaWxpdGllczogW1wiY29kZWdlblwiXSxcbiAgZW5hYmxlUHJvcG9zZWRBcGk6IGZhbHNlLFxuICBlZGl0b3JUeXBlOiBbXCJmaWdtYVwiLCBcImZpZ2phbVwiLCBcImRldlwiXSxcbiAgY29kZWdlbkxhbmd1YWdlczogW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIkxhbmd1YWdlIExhYmVsXCIsXG4gICAgICB2YWx1ZTogXCJsYW5ndWFnZS12YWx1ZVwiLFxuICAgIH0sXG4gIF0sXG59O1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFnVixPQUFPLFVBQVU7QUFDalcsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxrQkFBa0I7QUFDekIsU0FBUyxzQkFBc0I7OztBQ0YvQixJQUFPLHlCQUFRO0FBQUEsRUFDYixNQUFNO0FBQUEsRUFDTixJQUFJO0FBQUEsRUFDSixLQUFLO0FBQUEsRUFDTCxNQUFNO0FBQUEsRUFDTixJQUFJO0FBQUEsRUFDSixjQUFjLENBQUMsU0FBUztBQUFBLEVBQ3hCLG1CQUFtQjtBQUFBLEVBQ25CLFlBQVksQ0FBQyxTQUFTLFVBQVUsS0FBSztBQUFBLEVBQ3JDLGtCQUFrQjtBQUFBLElBQ2hCO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRjs7O0FEVkEsSUFBTyw2QkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE9BQU87QUFBQSxFQUN6QyxTQUFTO0FBQUEsSUFDUCxlQUFlO0FBQUEsSUFDZixhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUSxTQUFTO0FBQUEsSUFDakIsV0FBVyxTQUFTLGVBQWUsV0FBVztBQUFBLElBQzlDLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLFFBQVEsS0FBSyxRQUFRLE1BQU07QUFBQSxJQUMzQixlQUFlO0FBQUEsTUFDYixPQUFPLEtBQUssUUFBUSxzQkFBc0I7QUFBQSxNQUMxQyxRQUFRO0FBQUEsUUFDTixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxXQUFXLEtBQUssUUFBUSxZQUFZO0FBQUEsTUFDcEMsV0FBVyxLQUFLLFFBQVEsWUFBWTtBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUNGLEVBQUU7IiwKICAibmFtZXMiOiBbXQp9Cg==
