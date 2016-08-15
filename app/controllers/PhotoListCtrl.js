photoApp.controller('PhotoListCtrl', function PhotoListCtrl($scope, $location, PhotoSrv) {
    $scope.photos = PhotoSrv.getAllPhotos();

    $scope.goPhotoDetails = function (photoId) {
        $location.path("/photo/" + photoId);
    }
});