"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var URL = 'https://jsonplaceholder.typicode.com/posts/1';
axios_1.default.get(URL).then(function (response) { return console.log(response.data); });
