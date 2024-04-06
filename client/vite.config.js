import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        // https:{
        //     key: './.cert/key.pem',
        //     cert: './.cert/cert.pem'
        // },
        // host: 'nexus.dev',
        host: true,
    },
    resolve: {
        alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
    }
});
