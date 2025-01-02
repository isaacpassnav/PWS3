import { Response, Request } from "express";
import { createAppointmentService, getAllAppointmentsService, getAppointmentByIdService, updateAppointmentService } from "../services/appointmentService";

export const getAllApointments = async (req: Request, res: Response) => {
    try {
        const appointments = await getAllAppointmentsService();
        res.status(200).json({
            message: "Listado de turnos obtenido exitosamente.",
            success: true,
            data: appointments,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al tratar de obtener los turnos de todos los usuarios",
            success: false,
            error: console.error(error),
        });
    }
};
export const getAppointmentById = async (req: Request, res: Response) => {

    try { 
        const id = parseInt(req.params.id);
        const appointments = await getAppointmentByIdService(id) 
        res.status(200).json({
            message: `Detalles de las citas del usuario${id} obtenidos exitosamente`,
            success: true,
            data: appointments,
        });
    } catch (error) {
        res.status(500).json({
            message:"Error al obtener los detalles del usuario",
            success: false,
            erro: console.error(error)
        });
    }
};
export const postScheduleAppointments = async (req:Request, res: Response) => {
    try {
        const appointmentData = req.body
        const newAppointment = await createAppointmentService(appointmentData);
        res.status(201).json({
            message: "Cita agendada exitosamente",
            success: true,
            data: newAppointment,
        })
    } catch (error) {
        res.status(500).json({
            message: "Error al registrar la cita",
            success: false,
            error: console.info(error)
        })
    }
};
export const putCancelAppointment = async (req:Request, res:Response) => {
    try {
        const id = parseInt(req.params.id);
        const updatedAppointment = await updateAppointmentService(id, { status: "Cancelled" });
        res.status(200).json({
            message: "Se cancelo exitosamente el turno",
            success: true,
            data: updatedAppointment,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error al intentar cancelar turno",
            success: false,
            error: console.error(error)
        })
    }
};

