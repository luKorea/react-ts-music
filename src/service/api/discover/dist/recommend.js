"use strict";
exports.__esModule = true;
exports.getArtistList = exports.getTopList = exports.getNewAlbum = exports.getHotRecommend = exports.getTopBanner = void 0;
var service_1 = require("@/service");
function getTopBanner() {
    return service_1["default"].get({
        url: '/banner'
    });
}
exports.getTopBanner = getTopBanner;
function getHotRecommend() {
    return service_1["default"].get({
        url: '/personalized'
    });
}
exports.getHotRecommend = getHotRecommend;
function getNewAlbum(limit, offset) {
    return service_1["default"].get({
        url: '/album/new',
        params: {
            limit: limit,
            offset: offset
        }
    });
}
exports.getNewAlbum = getNewAlbum;
function getTopList(id) {
    return service_1["default"].get({
        url: '/playlist/detail',
        params: {
            id: id
        }
    });
}
exports.getTopList = getTopList;
function getArtistList(limit, cat) {
    return service_1["default"].get({
        url: '/artist/list',
        params: {
            cat: cat,
            limit: limit
        }
    });
}
exports.getArtistList = getArtistList;
