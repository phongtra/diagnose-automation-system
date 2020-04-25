"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var symptoms_1 = __importDefault(require("./routes/symptoms"));
var diagnoses_1 = __importDefault(require("./routes/diagnoses"));
var issueInfo_1 = __importDefault(require("./routes/issueInfo"));
var app = express_1.default();
app.get('/', function (_req, res) {
    res.send('hello');
});
app.use('/symptoms', symptoms_1.default);
app.use('/diagnosis', diagnoses_1.default);
app.use('/issues', issueInfo_1.default);
exports.default = app;
