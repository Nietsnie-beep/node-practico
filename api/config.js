module.exports = {
    remoteDB : process.env.REMOTE_DB || false,
    api:{
        port: process.env.API_PORT || 3000,    
    },
    post:{
        port: process.env.POST_PORT || 3002,
    },
    jwt:{
        secret : process.env.JWT_SECRET || 'notasecret!',
    },

    mysql:{
        host:process.env.MYSQL_HOST || 'remotemysql.com',
        user: process.env.MYSQL_USER || 'Ecc9rzr9Zq',
        password: process.env.MYSQL_PASS || 'oyqO82wGXO',
        database: process.env.MYSQL_DB || 'Ecc9rzr9Zq',

    },
    mysqlService:{
        host: process.env.MYSQL_SRV_PORT || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
    cacheService:{
        host: process.env.MYSQL_SRV_PORT || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3003,
    },
    redis:{
        host: process.env.REDIS_HOST ||'redis-18607.c233.eu-west-1-1.ec2.cloud.redislabs.com',
        port: process.env.REDIS_PORT || '18607',
        password:  process.env.REDIS_PASSWORD || 'KsQsfuGKjM8vPfYy4nV1itED9l2ccZuu'
    }
}
