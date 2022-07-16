/**
 * Required External Modules
 */
import dotenv from "dotenv";
import express from "express";
import path from "path";
import cors from "cors";
import helmet from "helmet";

import expressSession from "express-session";
import passport from "passport";
import Auth0Strategy from "passport-auth0";

// initialize configuration
dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());


// Configure Express to use EJS
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.render("index");
});

/**
 * Server Activation
 */

// start the express server

app.listen(PORT, () => {
     // tslint:disable-next-line:no-console
    console.log(`Listening on port ${PORT}`);
});