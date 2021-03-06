const { nanoid } = require('nanoid')
const auth = require('../auth');
const TABLA = 'user'

module.exports = function (injectedStore, injectedCache) {
    let store = injectedStore;
    let cache = injectedCache;
    if (!store) {
        store = require('../../../store/dummy')
    }

    const login = async (username, password) => {
        const data = await store.query(TABLA, { user: username })
        return data;
    }

    const list = async () => {
        let users = await cache.list(TABLA)
        if (!users){
            console.log('no estaba en cache buscando en DB')
            users = await store.list(TABLA)
            cache.upsert(TABLA, users)
        }else{
            console.log('nos traemos el datos del cache');
        }
        return users
    }

    const get = async (id) => {
        return store.get(TABLA, id)
    }

    const upsert = async(body) => {
        const user = {
            name: body.name,
            username: body.username,
            id: body.id ? body.id : nanoid(),
        };

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            })
        }

        return store.upsert(TABLA, user);
    }

    function follow(from, to){
        return store.upsert(TABLA + '_follow', {
            user_from: from,
            user_to: to,

        });
    }

    // function followers(from){
    //     console.log(from);
    //     return store.getFollowers({
    //         user_from:from
    //     });
    // }


    async function following(user) {
        const join = {}
        join[TABLA] = 'user_to';
        const query = {user_from:user}

        return await store.query(TABLA + '_follow', query, join) 
    }

    return {
        list,
        get,
        upsert,
        follow,
        // followers,
        following,
    };
}
