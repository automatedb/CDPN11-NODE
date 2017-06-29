const Controller = require('./Controller');

class IndexCtrl extends Controller {
    index(req, res) {
        res.render('index/index', {
            name: req.params.param || this._config.defaultName
        });
    }
}

module.exports = IndexCtrl;