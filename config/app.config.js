let appConfig={};
appConfig.port=7000;
appConfig.db={URL:'mongodb+srv://Admin:admin@free-cluster-dfiz5.mongodb.net/test_db?retryWrites=true&w=majority'};
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.apiVersion = '/api/v1';

module.exports={
    port:appConfig.port,
    db:appConfig.db,
    env:appConfig.env,
    apiVersion:appConfig.apiVersion,
    allowedCorsOrigin:appConfig.allowedCorsOrigin
}