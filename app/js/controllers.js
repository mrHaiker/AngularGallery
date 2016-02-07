app.controller('AlbumListCtrl', function ($scope, $http) {
    $scope.json = $http.get('json/gallery.json').success(function (data) {
        $scope.albums = data;
    });
});

app.controller('AlbumCtrl', function ($scope, $http, $routeParams) {
    $scope.albumName = $routeParams['albumName'];
    $scope.json = $http.get('json/gallery.json').success(function (data) {
        angular.forEach(data, function(value, key) {
            if (value.title == $scope.albumName) $scope.album = value;
        })
    });
});

app.controller('addAlbumCtrl', function ($scope, getTemplate) {
    var append = function (data) {
        $('table').append(data);
    };
    $scope.name = '';
    $scope.src_cover = '';
    $scope.pic = [];
    $scope.add = function () {
        console.log($scope.name);
    };
    $scope.addNewPic = function() {
        getTemplate.getNewLine(append);
    };

});

app.controller('PhotoCtrl', function ($scope, $http, $routeParams) {
    $scope.albumName = $routeParams['albumName'];
    $scope.pic = $routeParams['photoName'];
    $scope.json = $http.get('json/gallery.json').success(function (data) {
        angular.forEach(data, function(value, key) {
            if (value.title == $scope.albumName) $scope.album = value.pictures;
        });
        angular.forEach($scope.album, function(value, key) {
            if (value.title == $scope.pic) $scope.photo = value;
        })
    });
});
