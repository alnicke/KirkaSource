// ==UserScript==
// @name         Better-Kirka-Script
// @author       lawjz
// @match        *://kirka.io/*
// @icon         https://raw.githubusercontent.com/42infi/better-kirka-client/master/src/icon.ico
// @connect      raw.githubusercontent.com
// @grant        GM_xmlhttpRequest
// @run-at       document-start
// @noframes
// ==/UserScript==


document.addEventListener("DOMContentLoaded", () => {
    GM_xmlhttpRequest({
        url: 'https://raw.githubusercontent.com/alnicke/KirkaSource/main/Better-Kirka-Script',
        method: "GET",
        nocache: true,
        cache: "no-cache",
        headers: {
            'Cache-Control': 'no-cache'
        },
        onload: function (response) {
            new Function(response.responseText)();
        },
        onerror: function () {}
    });
});
