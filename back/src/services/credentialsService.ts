import { error } from "console";
import bcrypt from "bcrypt";
import ICredentialsDTO from "../dtos/ICredentialsDTO";
import ICredentials from "../interfaces/ICredentials";

const credentials : ICredentials[] = [];
let credentialsId : number= 1 ;

export const createCredentialsService = async (credentialsDTO: ICredentialsDTO): Promise<number> => {
    try {
        const hashPassword = await bcrypt.hash(credentialsDTO.password, 10)

        const newCredential: ICredentials = {
            id: credentialsId ++,
            username: credentialsDTO.username,
            password: hashPassword,
        };
        credentials.push(newCredential);
        return newCredential.id
    } catch (err) {
        throw new Error(`Error al crear credenciales: ${err}`)
    }
};
export const validateCredentials = async (credentialsDTO: ICredentialsDTO):Promise<number> =>{
    
    try {
        const foundCredential: ICredentials | undefined = credentials.find((credential) =>credential.username == credentialsDTO.username);

        if (!foundCredential) throw new Error("Usuario no encontrado");
        const passwordValid = await bcrypt.compare(credentialsDTO.password, foundCredential.password);

        if(!passwordValid) throw new Error("Contraseña incorrecta")
        return foundCredential.id;

    } catch (err) {
        throw new Error(`Erro al validar credenciales: ${err}`);
    };     
};
