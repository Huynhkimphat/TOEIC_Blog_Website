const homeRouter = require("./home");

function route(app) {
    // about status : 0 <=> not login , 1 <=> login with customer , 2 <=> login with staff , 3 <=> login with admin
    // Route Home
    app.use("/", homeRouter);
}

module.exports = route;