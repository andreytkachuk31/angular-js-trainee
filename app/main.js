var photoApp = angular.module('photoApp', ['ngRoute']);

photoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'app/templates/photo-list.html',
        controller: 'PhotoListCtrl'}).
    when('/photo/:photoId', {
        templateUrl: 'app/templates/photo-details.html',
        controller: 'PhotoDetailsCtrl'}).
    otherwise ({
        redirectTo: '/home'
    });
}]);