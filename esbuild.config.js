const { build } = require("esbuild");
const { pnpPlugin } = require("@yarnpkg/esbuild-plugin-pnp");
const pkg = require("./package.json");

const watch = process.argv.includes("--watch");
const external = Object.keys({
  ...pkg.dependencies,
  ...pkg.peerDependencies,
});

const config = {
  entryPoints: ["./src/index.ts"],
  outdir: "lib",
  target: "es2015",
  bundle: true,
  sourcemap: true,
  external,
  watch,
  minify: !watch,
  plugins: [pnpPlugin()],
};

Promise.all([
  build({
    ...config,
    format: "cjs",
  }),
  build({
    ...config,
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
  }),
]);
