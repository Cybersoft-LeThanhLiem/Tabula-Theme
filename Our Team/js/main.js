var userService = new UserService();
getUsers();

function getUsers(params) {
    let promise = userService.getUsersList();
    promise
        .then(function (result) {
            console.log(result.data);
            renderUsers(result.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function renderUsers(userArr) {
    let content = "";
    let teacherArr = userArr.filter(user => user.loaiND == "GV");
    teacherArr.forEach(teacher => {
        content += `
        <div class="col-12 col-lg-3">
            <div class="card">
                <img src="./images/${teacher.hinhAnh}" alt="...">
                <div class="card-body text-center">
                    <h5 class="nationality">${teacher.ngonNgu}</h5>
                    <h4 class="name">${teacher.hoTen}</h4>
                    <p class="card-text">${teacher.moTa}</p>
                </div>
            </div>
        </div>
        `
    });

    document.getElementById("teachersList").innerHTML = content;
}