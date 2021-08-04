
//const store = require('../../../store/remote-mysql')
const config = require('../../config')
const ctrl = require('./controller')

let store
if (config.remoteDB === true){
    store = require('../../../store/mysql');
}else{
    store = require('../../../store/mysql')
}


module.exports = ctrl(store)

