import ICreateUSerDTO from "../dtos/ICreateUserDTO";
import IUser from "../interfaces/IUser";
import { createCredentialsService } from "./credentialsService";

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
        password: createUserDTO.username,
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
