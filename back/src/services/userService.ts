import ICreateUSerDTO from "../dtos/ICreateUserDTO";
import IUser from "../interfaces/IUser";
import { createCredentialsService,validateCredentials } from "./credentialsService";

const users: IUser[]=[];
let userId = 0;

export const getAllUserServices = async(): Promise<IUser[]> =>{
    const allUsers = users;
    return allUsers;
}
export const getUserByIdService = async(id: number):Promise<IUser> =>{
    const foundUser: IUser | undefined = users.find ((user) => user.id == id)
    if (!foundUser) throw new Error(`El Usuario con el id ${id} no existe`) 
    return foundUser;
}

export const registerUserService = async(createUserDTO: ICreateUSerDTO): Promise<IUser> =>{
    const newCredential: number = await createCredentialsService({
        username: createUserDTO.username,
        password: createUserDTO.password,
    });
    const credentailId:number = await createCredentialsService({
        username:createUserDTO.username,
        password:createUserDTO.password,
    });
    const newUser: IUser = {
        id: userId ++,
        name: createUserDTO.name,
        email: createUserDTO.email,
        birthday: createUserDTO.birthday,
        nDni: createUserDTO.nDni,
        credentialsId: newCredential
    }
    users.push(newUser)
    return newUser;
}
// Login del usuaio
export const loginUserService = async (username: string, password: string): Promise<IUser> =>{
    const credentailId = await validateCredentials({username, password});

    const foundUser = users.find((user)=> user.credentialsId === credentailId);
    if(!foundUser) throw new Error("Usuario no encontrado")
    return foundUser;
};
