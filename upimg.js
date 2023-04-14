document.getElementById("ibbjs").addEventListener("load", function () {
    PF.obj.devices = window.devices;
    PF.fn.window_to_device = window.window_to_device;
    PF.obj.config.base_url="https://www.tutor26.com/";
    PF.obj.config.json_api="https://imgbb.com/json";
    PF.obj.config.listing.items_per_page="32";
    PF.obj.config.auth_token="c825e3f152ea25a437e74788f64ec3bfc0203b26";
    PF.obj.l10n=[];
    CHV.obj.embed_tpl={"":{"label":"Links","options":{"viewer-links":{"label":"Viewer links","template":"https://www.tutor26.com/","size":"viewer"}}},"html-codes":{"label":"HTML Codes","options":{"html-embed-medium":{"label":"HTML full linked","template":"<a =\"https://www.tutor26.com/\"><img src=\"%MEDIUM_URL%\" alt=\"%MEDIUM_NAME%\" border=\"0\"><\/a>","size":"large"},"html-embed-thumbnail":{"label":"HTML thumbnail linked","template":"<a =\"https://www.tutor26.com/\"><img src=\"%THUMB_URL%\" alt=\"%THUMB_NAME%\" border=\"0\"><\/a>","size":"thumb"}}},"bbcodes":{"label":"BBCodes","options":{"bbcode-embed-medium":{"label":"BBCode full linked","template":"[url=https://www.tutor26.com/][img]%MEDIUM_URL%[\/img][\/]","size":"medium"},"bbcode-embed-thumbnail":{"label":"BBCode thumbnail linked","template":"[url=https://www.tutor26.com/][img]%THUMB_URL%[\/img][\/url]","size":"thumb"}}}};
    CHV.obj.config={"image":{"max_filesize":32000000,"load_max_filesize":8000000},"upload":{"image_types":["jpg","png","bmp","gif","tif","webp","heic","pdf","jpeg","tiff","heif"]},"listing":{"viewer":true}};ibb();
    });