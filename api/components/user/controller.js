const TABLA = 'user'


module.exports = function(injectedStore) {
    let store = injectedStore;    
    if (!store) {
        store = require('../../../store/dummy')
    }
    
    const list = async() =>{
        return store.list(TABLA)
    }

    return {
        list,
    };
}

 
