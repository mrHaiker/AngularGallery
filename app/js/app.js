var app = angular.module('galleryApp', ['ngRoute']).config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'templates/albumList.html',
            controller: 'AlbumListCtrl'
        })
        .when('/album/:albumName', {
            templateUrl: 'templates/albumPage.html',
            controller: 'AlbumCtrl'
        })
        .when('/album/:albumName/photo/:photoName', {
            templateUrl: 'templates/photoPage.html',
            controller: 'PhotoCtrl'
        })
        .when('/add', {
            templateUrl: 'templates/addAlbum.html',
            controller: 'addAlbumCtrl'
        })
        .otherwise({redirectTo: '/'})
});