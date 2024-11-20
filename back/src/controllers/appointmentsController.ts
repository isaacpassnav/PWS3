import { Response, Request } from "express";

export const getAllApointments = async (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: "Obtener el listado de los turnos de todos los usuarios",
            success: true,
            data: []
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al tratar de obtener los turnos de todos los usuarios",
            success: false,
            error: console.info(error)
        });
    }
}
export const getAppointmentById = async (req: Request, res: Response) => {
    let id = req.params.id
    try {  
        res.status(201).json({
            message: `Detalles de las citas del usuario${id} obtenidos exitosamente`,
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(500).json({
            message:`Error al obtener los detalles del usuario${id}`,
            success: false,
            erro: console.info(error)
        });
    }
}
export const postScheduleAppointments = async (req:Request, res: Response) => {
    try {
        const appointmentData = req.body
        res.status(200).json({
            message: "Cita agendada exitosamente",
            success: true,
            data: appointmentData
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al registrar la cita",
            success: false,
            error: console.info(error)
        })
    }
}
export const putCancelAppointment = async (req:Request, res:Response) => {
    try {
        // const date = req.body;
        res.status(201).json({
            message: "Se cancelo exitosamente el turno",
            success: true,

        });
    } catch (error) {
        res.status(500).json({
            message: "Error al intentar cancelar turno",
            success: false,
            error: console.info(error)
        })
    }
}

