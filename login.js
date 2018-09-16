//global characters
var userDatabase = [];
var ID = 0;

function user(id, name, pass) {
    this.username = name;
    this.password = pass;
    this.id = id;
    userDatabase.push(this);
    ID++;
}

//sign up change
function signUp() {
    document.getElementById("signUp-bt").style.backgroundColor = "#6899e8";
    document.getElementById("login-bt").style.backgroundColor = "#a3a3a3";
    document.getElementById('su-name').style.display = "";
    name = document.getElementById("name").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    account = new user(ID, username, password);
}

function login() {
    document.getElementById("signUp-bt").style.backgroundColor = "#a3a3a3";
    document.getElementById("login-bt").style.backgroundColor = "#6899e8";
    document.getElementById('su-name').style.display = 'none';
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

}
