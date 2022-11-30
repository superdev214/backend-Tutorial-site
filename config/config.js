const config = {
    app: {
        port: 3000
    },
    //  MySql db
    // db: {
    //     HOST:     'localhost',
    //     USER:     'root',
    //     PASSWORD: '',       
    //     DB:       'testdb',
    //     dialect:  'mysql',
    //     pool:
    //     {
    //         max:     5    ,
    //         min:     0    ,
    //         acquire: 30000,
    //         idle:    10000
    //     }
    // }
    //  MySql db end
    db : {
        url : 'mongodb://127.0.0.1:27017/testdb'
    },
    jwt_key : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
};

module.exports = config;