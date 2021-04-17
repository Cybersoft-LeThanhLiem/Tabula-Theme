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
                    <button class="btn btn-warning" onclick="getUser('${id}')">Sửa</button>
                    <button class="btn btn-danger" onclick="deleteUser('${id}')">Xóa</button>
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
            getUserList();

            document.querySelector("#myModal .close").click();
        })
        .catch(function (error) {
            console.log(error);
        });
}

function deleteUser(id) {
    userService.removeUser(id)
    .then(function (result) {
        getUserList();
    })
    .catch(function (error) {
        console.log(error);
    });
}

function getUser(id) {
    userService.getUser(id)
    .then(function (result) {
        console.log(result.data);

        $('#myModal').modal('show');
        document.getElementById("TaiKhoan").value = result.data.taiKhoan;
        document.getElementById("HoTen").value = result.data.hoTen;
        document.getElementById("MatKhau").value = result.data.matKhau;
        document.getElementById("Email").value = result.data.email;
        document.getElementById("HinhAnh").value = result.data.hinhAnh;
        document.getElementById("loaiNguoiDung").value = result.data.loaiND;
        document.getElementById("loaiNgonNgu").selectedOptions[0].text = result.data.ngonNgu;
        document.getElementById("MoTa").value = result.data.moTa;
    })
    .catch(function (error) {
        console.log(error);
    });
}