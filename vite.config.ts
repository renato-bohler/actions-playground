import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

console.log(
  "\n\n\nGitHub Environment Variables:",
  Object.fromEntries(
    Object.entries(process.env).filter(([key]) => key.startsWith("GITHUB_"))
  ),
  "\n\n\n\n"
);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
