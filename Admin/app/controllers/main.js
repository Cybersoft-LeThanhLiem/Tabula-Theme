var userService = new UserService();

getUserList();

function getUserList() {
    userService.getUserList()
        .then(function (result) {
           console.log(result.data);
           renderUsers(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

document.getElementById("btnThemNguoiDung").addEventListener("click", function () {
    let footerEle = document.querySelector(".modal-footer");
    footerEle.innerHTML = `
        <button class="btn btn-success">Thêm người dùng</button>
    `;
});

function renderUsers(userList) {
    let result = "";
    let id = 1;
    userList.forEach(user => {
        result += `
            <tr>
                <td>${id}</td>
                <td>${user.taiKhoan}</td>
                <td>${user.matKhau}</td>
                <td>${user.hoTen}</td>
                <td>${user.email}</td>
                <td>${user.ngonNgu}</td>
                <td>${user.loaiND}</td>
                <td>
                    <button class="btn btn-warning">Sửa</button>
                    <button class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        `;

        id++;
    });

    document.getElementById("tblDanhSachNguoiDung").innerHTML = result;
}