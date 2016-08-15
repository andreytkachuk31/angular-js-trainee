photoApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
    when('/home', {
        templateUrl: 'js/templates/photo-list.html',
        controller: 'PhotoListCtrl'}).
    when('/photo/:photoId', {
        templateUrl: 'js/templates/photo-details.html',
        controller: 'PhotoDetailsCtrl'}).
    otherwise ({
        redirectTo: '/home'
    });
}]);