import { NetworkMessages } from "@common/network/messages";
import { createFileRoute, createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@ui/components/ui/button";
import {
  DownloadIcon,
  FolderInputIcon,
  FolderOutputIcon,
  UploadIcon,
} from "lucide-react";

export const Route = createFileRoute("/tokens")({
  component: Tokens,
});

function Tokens() {
  return (
    <div className="p-4 flex flex-col gap-4">
      <Button
        onClick={() => NetworkMessages.UPLOAD_PRIMITIVE_COLOR_TOKENS.send()}
      >
        <UploadIcon className="mr-2 h-4 w-4" /> Upload Primitive Color Tokens
      </Button>
      <Button>
        <DownloadIcon className="mr-2 h-4 w-4" />
        Export Semantic Tokens
      </Button>
    </div>
  );
}
