"use strict";
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
const usuario1 = {
    name: "Isaac Pasapera",
    age: 25,
    email: "pasapera123@gmail.com",
    status: true,
    address: {
        street: "Jiron Geminis 705, Los angeles",
        city: "Los olivos",
        code: 11011
    },
    role: UserRole.ADMIN
};
console.log(usuario1);
