import { createFileRoute, createLazyFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="p-4">
      <h4 className="font-semibold text-sm">About This Plugin</h4>
      <br />
      <div className="text-figma-text-secondary">
        This plugin is designed to enhance efficiency between designers using
        Figma and front-end developers. It allows you to inject primitive tokens
        and semantic tokens into Figma variables, streamlining the design
        process. Once the design is finalized, you can export the semantic
        tokens in JSON format and share them with developers. This ensures a
        seamless transition from design to development, maintaining consistency
        and accuracy throughout the workflow.
      </div>
    </div>
  );
}
