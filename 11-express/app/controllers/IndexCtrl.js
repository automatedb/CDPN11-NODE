class IndexCtrl {
    index(req, res) {
        res.render('index/index', {
            name: req.params.param || 'Bibi'
        });
    }
}

module.exports = IndexCtrl;