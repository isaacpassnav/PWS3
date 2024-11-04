// interface IUser{
//     name: string,
//     age: number,
//     email: string,
//     status: boolean,
//     address: IAddress
// }
interface IAddress {
    street: string,
    city: string,
    code: number
}
enum UserRole {
    ADMIN = "admin",
    USER = "user",
    GUEST = "guest"
}
type TUser = {
    name: string,
    age: number,
    email: string,
    status: boolean,
    address: IAddress,
    role: UserRole
}
const usuario1: TUser = {
    name: "Isaac Pasapera",
    age: 25,
    email: "pasapera123@gmail.com",
    status: true,
    address: {
        street: "Jiron Geminis 705, Los angeles",
        city: "Los olivos",
        code: 11011
    },
    role:UserRole.ADMIN
}

console.log(usuario1);

