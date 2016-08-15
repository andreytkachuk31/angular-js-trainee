var photoApp = angular.module('photoApp', ['ngRoute']);

photoApp.controller('PhotoListCtrl', function ImageListCtrl($scope, $location, PhotoSrv) {
    $scope.photos = PhotoSrv.getAllPhotos();

    $scope.goPhotoDetails = function (photo) {
        $location.path("/photo/" + photo.id);
    }
});