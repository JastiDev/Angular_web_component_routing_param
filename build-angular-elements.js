const fs = require("fs-extra");
const concat = require("concat");
(async function build() {
  const files = [
    "./dist/ngelement/runtime.js",
    "./dist/ngelement/polyfills.js",
    // "./dist/ngelement/scripts.js",
    "./dist/ngelement/main.js",
    "./dist/ngelement/4.js"
  ];
  await fs.ensureDir("ngelement-build");
  await concat(files, "ngelement-build/ngelement.js");
  await fs.copy(
    "./dist/ngelement/styles.css",
    "ngelement-build/styles.css"
  );
  await fs.copy("./dist/ngelement/assets/", "ngelement/assets/");
})();
