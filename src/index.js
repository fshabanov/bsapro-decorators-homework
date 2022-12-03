import { AppConfig } from "./common/common.js";
import { initDebounce } from "./decorators/decorators.js";

import { fastifyServer } from "./server.js";
import { UsersApi } from "./api/api.js";

class Application {
  @initDebounce(5000)
  initDbConnection() {
    console.log("DB connection was success!");
  }

  initApi() {
    new UsersApi();
  }

  async init() {
    this.initApi();

    await fastifyServer.listen({ port: AppConfig.PORT });

    this.initDbConnection();
  }
}

new Application().init().catch(console.error);
