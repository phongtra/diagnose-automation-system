"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var cors_1 = __importDefault(require("cors"));
var symptoms_1 = __importDefault(require("./routes/symptoms"));
var diagnoses_1 = __importDefault(require("./routes/diagnoses"));
var issueInfo_1 = __importDefault(require("./routes/issueInfo"));
var swagger_1 = __importDefault(require("./swagger"));
var app = express_1.default();
app.use(cors_1.default());
app.get('/', function (_req, res) {
    res.send('hello');
});
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.default));
app.use('/symptoms', symptoms_1.default);
app.use('/diagnosis', diagnoses_1.default);
app.use('/issues', issueInfo_1.default);
exports.default = app;
