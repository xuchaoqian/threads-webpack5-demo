const babelJest = require("babel-jest").default;
const { createHash } = require("crypto");

module.exports = {
  getCacheKey(fileData, filename, ...rest) {
    const babelCacheKey = babelJest.getCacheKey(fileData, filename, ...rest);
    return createHash("md5").update(babelCacheKey).update("1").digest("hex");
  },

  process(src, filename, ...rest) {
    if (filename.endsWith("src/Client.ts")) {
      src = src.replace(
        /import\s+\{([^}]+)\}\s+from\s+"threads";/,
        'import { Worker, $1} from "threads"'
      );
      src = src.replace(
        /new\s+Worker\(new\s+URL\(".\/worker\/entry.ts",\s+import.meta.url\)\)/,
        'new Worker("./worker/entry.ts")'
      );
    }
    return babelJest.process(src, filename, ...rest);
  },
};
