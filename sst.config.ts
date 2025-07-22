/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "character-creator",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    const storage = await import("./infrastructure/storage.js");
    await import("./infrastructure/api.js");
    const frontend = await import("./infrastructure/frontend.js");

    return {
      MyBucket: storage.bucket.name,
      MyFrontend: frontend.web.name,
    };
  },
});
