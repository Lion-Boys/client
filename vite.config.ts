import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        react({
            babel: {
                plugins: [["babel-plugin-react-compiler"]],
            },
        }),
        tailwindcss(),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
    },
    base: "/",
    server: {
        proxy: {
            "/api": {
                target: process.env.VITE_SERVER_HOST,
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api\//, "/"),
            },
        },
    },
});
