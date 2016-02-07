app.factory('getTemplate', function ($http) {
    var getNewLine = function (callback) {
        $http.get('/templates/newLine.html').success(callback)
    };

    return {
        getNewLine: getNewLine
    }
});