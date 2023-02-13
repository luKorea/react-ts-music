"use strict";
exports.__esModule = true;
exports.getTopAlbums = exports.getHotAlbums = void 0;
var service_1 = require("@/service");
function getHotAlbums() {
    return service_1["default"].get({
        url: '/album/newest'
    });
}
exports.getHotAlbums = getHotAlbums;
function getTopAlbums(limit, offset) {
    return service_1["default"].get({
        url: '/album/new',
        params: {
            limit: limit,
            offset: offset
        }
    });
}
exports.getTopAlbums = getTopAlbums;
