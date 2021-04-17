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
        <button class="btn btn-success" onclick="addUser()">Thêm người dùng</button>
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
                <td class="text-center">
                    <button class="btn btn-warning">Sửa</button>
                    <button class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        `;

        id++;
    });

    document.getElementById("tblDanhSachNguoiDung").innerHTML = result;
}

function addUser() {
    let taiKhoan = document.getElementById("TaiKhoan").value;
    let hoTen = document.getElementById("HoTen").value;
    let matKhau = document.getElementById("MatKhau").value;
    let email = document.getElementById("Email").value;
    let hinhAnh = document.getElementById("HinhAnh").value;
    let loaiND = document.getElementById("loaiNguoiDung").value;
    let ngonNgu = document.getElementById("loaiNgonNgu").selectedOptions[0].text;
    let moTa = document.getElementById("MoTa").value;

    let user = new User(taiKhoan, hoTen, matKhau, email, loaiND, ngonNgu, moTa, hinhAnh);
    console.log(user);

    userService.addUser(user)
        .then(function (result) {
            console.log(result.data);
            getUserList();

            document.querySelector("#myModal .close").click();
        })
        .catch(function (error) {
            console.log(error);
        });
}