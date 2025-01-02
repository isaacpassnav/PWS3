import { Response, Request } from "express"
import { getAllUserServices, getUserByIdService, loginUserService, registerUserService } from "../services/userService";
export const getAllUsers = async (req: Request, res:Response) =>{
    try {
        const user =await getAllUserServices();
        res.status(201).json({
            message: "obtener el listado de todos los usuarios",
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            message:"Error al obtener el listado de usuarios",
            success: false,
            error: console.error(error)
        });
    }
};
export const getUserById = async(req: Request, res: Response) =>{
    try {
        const id = parseInt(req.params.id);
        const user = await getUserByIdService(id);
        res.status(200).json({
            message: `Detalles del usuario con ID: ${id} obtenidos exitosamente`,
            success: true,
            data: user,
        });
    } catch (error) {
        res.status(500).json({
            message:"Error al obtener los detalles del usuario",
            success: false,
            error: console.error(error)
        });
    }
};
export const postRegisterUser = async(req:Request, res: Response) =>{
    try {
        const userData = req.body
        const newUser = await registerUserService(userData);
        res.status(201).json({
            message: "Usuario registrado exitosamente",
            success: true,
            data: newUser,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al registrar el usuario",
            success: false,
            error: console.error(error)
        });
    }
};
export const postLoginUser = async(req: Request, res:Response) =>{
    try {
        const {username, password} = req.body;
        const user = await loginUserService(username, password)
        res.status(200).json({
            message: "Inicio de sesión exitoso",
            success: true,
            data: user
        });
    } catch (error) {
        res.status(401).json({
            message: "Error al iniciar sesion",
            success: false,
            error: console.error(error)
        });
    }
};
