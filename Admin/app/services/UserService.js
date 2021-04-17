function UserService() {
    this.getUserList = function () {
        var promise = axios({
            method: 'get',
            url: 'https://60791b34e7f4f5001718532c.mockapi.io/user'
        });

        return promise;
    }

    this.addUser = function (user) {
        var promise = axios({
            method: 'post',
            url: 'https://60791b34e7f4f5001718532c.mockapi.io/user',
            data: user
        });

        return promise;
    }

    this.removeUser = function (id) {
        var promise = axios({
            method: 'delete',
            url: `https://60791b34e7f4f5001718532c.mockapi.io/user/${id}`
        });

        return promise;
    }
}