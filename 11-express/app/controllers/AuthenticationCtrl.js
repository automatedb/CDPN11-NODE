class AuthenticationCtrl {
    registration(req, res) { }

    login(req, res) {
        res.render('authentication/login');
    }

    postLogin(req, res) {
        console.log(req.body);

        res.render('authentication/login');
    }
}

module.exports = AuthenticationCtrl;