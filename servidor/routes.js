const knex = require('./knex/knex')

module.exports = {
    get,
    post,
    put,
    kill
};

function get(req, res) {
    knex.select()
        .from('persona')
        .then( persona => res.send(persona));
}

function post(req, res) {    
    knex('persona').insert({
        pers_nom: req.body.pers_nom
    })
    .then(() => {
        knex.select()
            .from('persona')
            .then( persona => res.send(persona));
    })  
}

function put(req, res) {
    knex('persona').where('pers_sec', req.params.pers_sec)
                .update({
                    pers_nom: req.body.pers_nom
                })
                .then(function() {
                    knex.select()
                    .from('persona')
                    .then( persona => res.send(persona));
                })
}

function kill(req, res) {
    knex('persona').where('pers_sec', req.params.pers_sec)
                .del()
                .then(function() {
                    knex.select()
                    .from('persona')
                    .then( persona => res.send(persona));
                })
};