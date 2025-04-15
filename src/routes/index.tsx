import { createFileRoute } from "@tanstack/react-router";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Textarea } from "@/components/ui/textarea";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <header>
        <h1 className="text-3xl">.ignore playground</h1>
        <p>
          Edit the ignore file on the left and see which files would be ignored
          or tracked
        </p>
      </header>
      <main>
        <ResizablePanelGroup direction="horizontal" className="border-t">
          <ResizablePanel>
            <h2>.gitignore</h2>
            <Textarea className="font-mono" />
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel>
            <h2>File Structure</h2>
            {/* Tree view */}
          </ResizablePanel>
        </ResizablePanelGroup>
      </main>
    </div>
  );
}
