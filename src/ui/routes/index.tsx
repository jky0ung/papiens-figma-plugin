import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@ui/components/ui/button";
import { Input } from "@ui/components/ui/input";
import { LogInIcon, Mail } from "lucide-react";

let called = false;

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2">
      <input />

      <Button>
        <LogInIcon className="mr-2 h-4 w-4" /> Login
      </Button>
    </div>
  );
}
