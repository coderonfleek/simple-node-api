const express = require("express");
var cors = require("cors");

// App
const app = express();

//Use cors
app.use(cors());

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

// Routes
require("./routes")(app);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
