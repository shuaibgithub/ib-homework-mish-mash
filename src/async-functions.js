const superagent = require('superagent');


const getTatooineResidents = () => {
    return superagent
        .get('https://swapi.co/api/planets/1/')
        .then(res => res.body.residents)
        .catch(err => console.log(err.body))
};

const promiseMeAString = ( ifString ) => {
    return new Promise((resolve, reject) => {
        if( ifString !== null ) {
            resolve('You kept the Promise!')
        } else {
            reject('You have failed me!')
        }
    })
  }

module.exports = {
    getTatooineResidents,
    promiseMeAString
}