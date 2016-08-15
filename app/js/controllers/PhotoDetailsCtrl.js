photoApp.controller('PhotoDetailsCtrl', function ImageDetailsCtrl($scope, $location, $routeParams, PhotoSrv) {
    $scope.photo = PhotoSrv.getPhotoById($routeParams.photoId);

    $scope.goHome = function () {
        $location.path("/home");
    }
});