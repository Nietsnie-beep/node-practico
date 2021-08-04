const { text } = require('body-parser');

const TABLA = 'post'

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    
    }
        function list() {
            return store.list(TABLA);
        }
        
        async function get(id) {
            return store.get(TABLA, id);
        }

        async function upsert(body){
            const newPost = {
                // id : id,
                // user : user,
                // text : text
                id: body.id ? body.id : nanoid(),
                user: body.user,
                text: body.text
            }

            return store.upsert(TABLA, newPost)
        }

        const getByUser = async(id) => {
            return store.query(TABLA, {
                user:id
            });
        }

        return{
            list,
            get,
            upsert,
            getByUser

        };
    };