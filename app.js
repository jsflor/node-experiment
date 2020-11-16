const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTES
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(adminRoutes);
app.use(shopRoutes);

app.listen(PORT, () => console.log(`Running on port ${PORT}`));
