photoApp.service('PhotoSrv', function () {
    var photos = [
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
    ];

    return {
        getAllPhotos: function () {
            return photos;
        },
        getPhotoById: function(id) {
            for (var photo_index in photos) {
                var photo = photos[photo_index];
                if (photo.id == id) {
                    return photo;
                }
            }
            return null;
        }
    }
});