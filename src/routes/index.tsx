import { createFileRoute } from "@tanstack/react-router";
import logo from "../logo.svg";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div>
      <header className="text-white text-3xl">
        <h1>.*ignore playground</h1>
      </header>
    </div>
  );
}
