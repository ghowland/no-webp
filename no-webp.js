// ==UserScript==
// @name         no-webp
// @namespace    https://github.com/ghowland/no-webp
// @version      1.0
// @description  Block WebP images naively, by changing all their filenames to PNG format, so they fail to load
// @author       Geoff Howland
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function convertWebPToPng(imgElement) {
        if (imgElement.src.toLowerCase().endsWith('.webp')) {
            imgElement.src = imgElement.src.replace('.webp', '.png');
        }
    }

    // Find all image elements on the page
    const images = document.querySelectorAll('img');

    // Loop through each image and convert WebP to PNG
    for (const image of images) {
        convertWebPToPng(image);
    }
})();

