const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;
const errorController = require("./controllers/error");

// TEMPLATING ENGINE
app.set("view engine", "ejs");
app.set("views", "views");

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// ROUTES
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use("/admin", adminRoutes);
app.use(shopRoutes);

// 404 Error Page
app.use(errorController.get404);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
