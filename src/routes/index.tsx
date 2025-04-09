import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <header>
        <h1>.*ignore playground</h1>
      </header>
    </div>
  );
}
