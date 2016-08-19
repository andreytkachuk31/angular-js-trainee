var photoApp = angular.module('photoApp', ['ngRoute']);

photoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'app/templates/photo-list.html',
        controller: 'PhotoListCtrl',
        resolve: {
            'PhotoSrvData': function (PhotoSrv) {
                return PhotoSrv.promise;
            }
        }
    }).
    when('/photo/:photoId', {
        templateUrl: 'app/templates/photo-details.html',
        controller: 'PhotoDetailsCtrl',
        resolve: {
            'PhotoSrvData': function (PhotoSrv) {
                return PhotoSrv.promise;
            }
        }
    }).
    otherwise ({
        redirectTo: '/home'
    });
}]);