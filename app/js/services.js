app.factory('getData', function ($http) {

    // ==============================================
    // Global
    // ==============================================

    var getData = function (src, callback) {
        $http.get(src).success(callback)
    };

    // ==============================================
    // Personal
    // ==============================================

    var getNewLine = function (callback) {
        getData('templates/newLine.html', callback);
    };
    var getAlbum = function (src, name, callback) {
        getData(src, function (data) {
            angular.forEach(data, function(value, key) {
                if (value.title == name) callback(value);
            })
        })
    };
    var getPhoto = function (src, name, callback) {    // принимает имя для поиска
        getData(src, function (data) {
            angular.forEach(data, function (albums, key) {
                angular.forEach(albums.pictures, function (pictures, key) {
                    if (pictures.title == name) callback(pictures);
                })
            })
        });
    };

    return {
        getNewLine: getNewLine,
        getPhoto: getPhoto,
        getAlbum: getAlbum
    }
});