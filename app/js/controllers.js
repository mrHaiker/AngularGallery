app.controller('AlbumListCtrl', function ($scope,getData) {
    getData.getAllAlbums('json/gallery.json', function (data) {
        $scope.albums = data;
    })
});

app.controller('AlbumCtrl', function ($scope, $routeParams, getData) {
    $scope.albumName = $routeParams['albumName'];
    getData.getAlbum('json/gallery.json', $scope.albumName, function (data) {
        $scope.album = data;
    })
});

app.controller('addAlbumCtrl', function ($scope, getData) {
    var append = function (data) {
        $('table').append(data);
    };
    $scope.obj = {
        name: '',
        src_cover: '',
        pic: []
    };
    $scope.add = function () {
        console.log($scope.obj);
    };
    $scope.addNewPic = function() {
        getData.getNewLine(append);
    };

});

app.controller('PhotoCtrl', function ($scope, $routeParams, getData) {
    $scope.albumName = $routeParams['albumName'];
    $scope.pic = $routeParams['photoName'];
    getData.getPhoto('json/gallery.json', $scope.pic, function (data) {
        $scope.photo = data;
    });
});
