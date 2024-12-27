import { Response, Request } from "express"
import { getAllUserServices, getUserByIdService, registerUserService } from "../services/userService";
export const getAllUsers = async (req: Request, res:Response) =>{
    try {
        res.status(201).json({
            message: "obtener el listado de todos los usuarios",
            success: true,
            data: []
        });
    } catch (error) {
        res.status(500).json({
            message:"Error al obtener el listado de usuarios",
            success: false,
            error: console.info(error)
        });
    }
};

export const getUserById = async(req: Request, res: Response) =>{
    try {
        const id = req.params.id
        res.status(201).json({
            message: `Detalles del usuario con ID: ${id} obtenidos exitosamente`,
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            message:"Error al obtener los detalles del usuario",
            success: false,
            error: console.info(error)
        });
    }
};

export const postRegisterUser = async(req:Request, res: Response) =>{
    try {
        const userData = req.body
        res.status(201).json({
            message: "Usuario registrado exitosamente",
            success: true,
            data: userData
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al registrar el usuario",
            success: false,
            error: console.info(error)
        });
    }
};

export const postLoginUser = async(req: Request, res:Response) =>{
    try {
        const {email, password} = req.body;
        res.status(200).json({
            message: "Inicio de sesión exitoso",
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al iniciar sesion",
            success: false,
            error: console.info(error)
        });
    }
};
