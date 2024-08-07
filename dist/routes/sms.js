"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const smsService_1 = require("../services/smsService");
const router = (0, express_1.Router)();
router.post("/setActiveProvider", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //provider 1 selceted
    res.send("OK").status(200);
}));
router.post("/sendSms", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield (0, smsService_1.sendSMS)("hellow", "9123143243");
    res.send(result).status(200);
}));
exports.default = router;
