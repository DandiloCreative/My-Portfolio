// Build-time renderer: turns each page into HTML so search engines (and visitors
// before JavaScript loads) see the full page content. Used by scripts/prerender.mjs.
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router";
import { Writable } from "node:stream";
import App from "./app/App";
import { ThemeProvider } from "./app/components/ThemeProvider";

export { ROUTES, SITE_URL } from "./app/routes";

export function render(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    let html = "";
    const sink = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });
    sink.on("finish", () => resolve(html));

    const { pipe } = renderToPipeableStream(
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </ThemeProvider>,
      {
        // Wait until every lazy-loaded section has rendered
        onAllReady() {
          pipe(sink);
        },
        onShellError: reject,
        onError(error) {
          reject(error);
        },
      }
    );
  });
}
