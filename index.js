import { Database } from "bun:sqlite";
import index from "./dist/index.html";

const db = new Database("mydb.sqlite");

const server = Bun.serve({
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response(Bun.file("./dist/index.html"));
    return new Response("404!");
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
