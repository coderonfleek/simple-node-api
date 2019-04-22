const express = require("express");
const cors = require("cors");
const routes = require("./routes");

// App
const app = express();

//Use cors
app.use(cors());

// Set port
const port = process.env.PORT || "1337";
app.set("port", port);

app.use('/', routes);

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
