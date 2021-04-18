function Validation() {
    this.checkEmpty = (input, spanID, message) => {
        if (input.trim() != "") {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }

    this.checkAccount = function (input, spanID, message, userList) {
        var isExist = false;

        isExist = userList.some(function (item) {
            return item.taiKhoan === input;
        });

        if (isExist) {
            document.getElementById(spanID).innerHTML = message;
            return false;
        } else {
            document.getElementById(spanID).innerHTML = "";
            return true;
        }
    }

    this.checkName = function (input, spanID, message) {
        const namePattern = /^[A-Za-z ]{0,}$/;
        if (input.match(namePattern)) {
            document.getElementById(spanID).innerHTML = "";
            return true;
        } else {
            document.getElementById(spanID).innerHTML = message;
            return false;
        }
    }
}