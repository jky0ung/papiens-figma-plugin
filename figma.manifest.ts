// https://www.figma.com/plugin-docs/manifest/
export default {
  name: "@papiens/figma-plugin",
  id: "1375036155939867875",
  api: "1.0.0",
  main: "plugin.js",
  ui: "index.html",
  capabilities: ["codegen"],
  enableProposedApi: false,
  editorType: ["figma", "dev"],
  documentAccess: "dynamic-page",
  networkAccess: {
    allowedDomains: ["none"],
  },
  codegenLanguages: [
    {
      label: "Language Label",
      value: "language-value",
    },
  ],
};
