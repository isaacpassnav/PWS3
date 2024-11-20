import { Router } from "express";
import { getAllApointments, getAppointmentById, postScheduleAppointments, putCancelAppointment } from "../controllers/appointmentsController";
const appointmentsRouter:Router = Router();

appointmentsRouter.get("/", getAllApointments);
appointmentsRouter.get("/:id", getAppointmentById);
appointmentsRouter.post("/schedule", postScheduleAppointments);
appointmentsRouter.put("/cancel/:id", putCancelAppointment);

export default appointmentsRouter;