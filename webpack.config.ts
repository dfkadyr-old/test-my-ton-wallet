import path from "path";

import webpack from "webpack";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPaths, Project } from "./config/build/types/config";

export default (env: BuildEnv): webpack.Configuration => {
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, "src", "index.tsx"),
        build: path.resolve(__dirname, "build"),
        html: path.resolve(__dirname, "public", "index.html"),
        src: path.resolve(__dirname, "src"),
        icons: path.resolve(__dirname, "src", "shared", "assets", "icons")
    };

    const mode = env?.mode ?? "development";
    const PORT = env?.port || 3000;

    const isDev = mode === "development";

    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        project: Project.Frontend
    });

    return config;
};
