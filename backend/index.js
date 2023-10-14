const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require("cookie-parser")
const session = require("express-session");


app.listen(8000,()=>console.log("server listening on port 8000"))