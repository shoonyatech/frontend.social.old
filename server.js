const express = require("express");
const serveStatic = require("serve-static");
const path = require("path");
app = express();
app.use(serveStatic(path.join(__dirname, "dist")));
app.listen(process.env.PORT || 8080);
