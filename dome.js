var sr = document.getElementsByClassName('sr');
var yh = document.getElementsByClassName('yh');
var mi = document.getElementsByClassName('mi');
var b = document.getElementsByClassName('z');
var dj = document.getElementsByClassName('dj');
var xsa = document.getElementsByClassName('xsa');
var xsb = document.getElementsByClassName('xsb');
var key = false;
var va = true;
var value = "";
function mima() {
    for (var i = 0; i < b.length; i++) {
        (function (i) {
            b[0].addEventListener('focus', function () {
                if (b[0].value === "请输入用户名" && va) {
                    b[0].value = "";
                }
            }, false)
            b[1].addEventListener('focus', function () {
                if (b[1].value === "请输入密码") {
                    b[1].value = "";
                    if (key == false) {
                        b[1].type = "password";
                        key = true;
                    }
                }
            }, false)


            b[i].addEventListener('blur', function () {
                if (value == "请输入用户名") {
                    va = false;
                }
                if (b[0].value.length == 0) {
                    b[0].value = "请输入用户名";
                    va = true;
                }
                if (b[1].value.length == 0) {
                    b[1].value = "请输入密码";
                    if (key == true) {
                        b[1].type = "";
                        key = false;
                    }
                }
            }, false)
        }(i))
    }

    dj[0].addEventListener('click', function () {
        if (b[0].value == "请输入用户名" || b[1].value == "请输入密码") {
            alert("你还没有输入用户名或者密码！！")
        } else {
            alert(yh[0].innerText + b[0].value + " " + mi[0].innerText + b[1].value)
        }
    }, false)

    b[0].addEventListener('input', function (e) {
        value = this.value;
        xsb[0].innerText = this.value;
    }, false)
    b[1].addEventListener('input', function (e) {
        xsb[1].innerText = this.value;
    }, false)
}
