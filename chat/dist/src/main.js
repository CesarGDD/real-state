"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path = require("path");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const URL = 'localhost:50055';
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        options: {
            url: URL,
            package: 'chatpb',
            protoPath: path.resolve(__dirname, '../chatpb/chatpb.proto'),
        }
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    await app.listen();
}
bootstrap();
//# sourceMappingURL=main.js.map