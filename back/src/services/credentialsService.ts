import { error } from "console";
import ICredentialsDTO from "../dtos/ICredentialsDTO";
import ICredentials from "../interfaces/ICredentials";

const credentials : ICredentials[] = [];
let credentialsId : number= 0 ;

export const createCredentialsService = async (credentialsDTO: ICredentialsDTO): Promise<number> => {
    const newCredential: ICredentials = {
        id: credentialsId ++,
        username: credentialsDTO.username,
        password: credentialsDTO.password
    };
    credentials.push(newCredential);
    return newCredential.id
}

export const validateCredentials = async (credentialsDTO: ICredentialsDTO):Promise<number> =>{
    const foundCredential: ICredentials | undefined = credentials.find((credential) =>credential.username == credentialsDTO.username);

    if (!foundCredential) throw new Error("Usuario no encontrado");
    if (foundCredential.password == credentialsDTO.password) throw new Error("Contraseña incontrada");

    return foundCredential.id;
       
}
