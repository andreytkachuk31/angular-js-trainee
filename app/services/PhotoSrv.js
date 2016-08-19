photoApp.service('PhotoSrv', function ($http) {
    var photos = null;

    var promise = $http.get('photos.json').success(function (response) {
        photos = response;
    });

    return {
        promise:promise,
        getAllPhotos: function () {
            return photos;
        },
        getPhotoById: function(id) {
            var result = -1;

            for(var i = 0; i < photos.length; i++) {
                if(photos[i].id == id) {
                    result = photos[i];
                }
            }

            return result;
        }
    }
});