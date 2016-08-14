var imageApp = angular.module('imageApp', []);

imageApp.controller('ImageListCtrl', function ImageListCtrl($scope) {
    $scope.images = [
        {
            id: 1,
            name: 'Summer.jpeg',
            countLikes: 3,
            visible: true
        },
        {
            id: 2,
            name: 'Autumn.png',
            countLikes: 6,
            visible: false
        },
        {
            id: 3,
            name: 'Winter.png',
            countLikes: 9,
            visible: true
        },
        {
            id: 4,
            name: 'Spring.JPG',
            countLikes: 12,
            visible: true
        }
    ]
});