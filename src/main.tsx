import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./app/App.tsx";
import "./styles/index.css";
import { ThemeProvider } from "./app/components/ThemeProvider.tsx";

// The Google Font stylesheet starts as media="print" so it doesn't block the first paint.
// Switch it on here (an inline onload="" would be blocked by the Content Security Policy).
document.querySelectorAll<HTMLLinkElement>("link[data-async-font]").forEach((link) => {
  link.media = "all";
});

createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeProvider>
);