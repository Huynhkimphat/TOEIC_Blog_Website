class HomeController {
    //* [GET]/
    show(req, res, next) {
        (async() => {
            res.render("home");
        })();
    }
}
module.exports = new HomeController();