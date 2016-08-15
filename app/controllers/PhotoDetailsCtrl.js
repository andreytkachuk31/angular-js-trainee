photoApp.controller('PhotoDetailsCtrl', function PhotoDetailsCtrl($scope, $location, $routeParams, PhotoSrv) {
    $scope.photo = PhotoSrv.getPhotoById($routeParams.photoId);

    $scope.goHome = function () {
        $location.path("/home");
    }
});