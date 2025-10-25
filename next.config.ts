import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ensure Turbopack/Next uses this project folder as the workspace root when
  // multiple lockfiles exist on the machine.
  turbopack: {
    root: path.resolve(__dirname),
  },
  // When starting the production server, Next may try to trace output from a
  // different root when multiple lockfiles exist; make tracing root explicit.
  // `outputFileTracingRoot` is a top-level option, not under `output`.
  outputFileTracingRoot: path.resolve(__dirname),
};

export default nextConfig;
