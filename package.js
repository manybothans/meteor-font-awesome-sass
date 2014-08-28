Package.describe({
    summary: "Font Awesome stylesheets in SCSS format"
});

Package.onUse(function (api) {
    api.versionsFrom('0.9.0');
    
    api.use(["fourseven:scss"]);

    api.addFiles([
        "assets/fonts/fontawesome-webfont.eot",
        "assets/fonts/fontawesome-webfont.svg",
        "assets/fonts/fontawesome-webfont.ttf",
        "assets/fonts/fontawesome-webfont.woff",
        "assets/fonts/FontAwesome.otf"
    ], "client");
});
