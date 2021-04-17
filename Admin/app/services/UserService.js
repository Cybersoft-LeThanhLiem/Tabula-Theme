function UserService() {
    this.getUserList = function () {
        var promise = axios({
            method: 'get',
            url: 'https://60791b34e7f4f5001718532c.mockapi.io/user'
        });

        return promise;
    }
}