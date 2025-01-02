import IAppointment from "../interfaces/IAppointment";

const appointments : IAppointment[] = [];
let appointmentId = 0

export const getAllAppointmentsService = async(): Promise<IAppointment []> => {
    const allAppointmens = appointments;
    return allAppointmens;
};
export const getAppointmentByIdService = async (id: number): Promise<IAppointment []> =>{
    const foundAppointment: IAppointment | undefined =  appointments.find((appointment) => appointment.id ==id);

    if(!foundAppointment){
        throw new Error(`Turno con el Id: ${id} no fue encontrado`);
    } 
    return appointments
};
export const createAppointmentService = async(newAppointment: Omit<IAppointment, "id" | "status">): Promise<IAppointment> =>{
    if(newAppointment.time<0 || newAppointment.time > 2359){
        throw new Error("La hora debe estar entre 0000 y 2359.")
    }
    const isConflict = appointments.some(
        (appointment)=>
            appointment.date == newAppointment.date &&
            appointment.time == newAppointment.time &&
            appointment.satus == "Active"
    );
    if (isConflict) {
        throw new Error("El horario ya esta reservado, por favor elige otro")
    }
    // Crear el nuevo turno
    const appointment:IAppointment = {
        id: appointmentId ++,
        ...newAppointment,
        satus: "Active",
    }
    appointments.push(appointment);
    return appointment;
};
// Actualizar un turno existente.
export const updateAppointmentService = async(id: number, updatedFields: Partial<Omit<IAppointment, "id">>): Promise<IAppointment> =>{
    const appointmentIndex = appointments.findIndex((appointment) => appointment.id == id);

    if(appointmentIndex === -1){
        throw new Error(`Turno con el id:${id} no fue encontrado`);
    }
    if (updatedFields.satus && !["Active", "Cancelled"]. includes(updatedFields.satus)) {
        throw new Error(`El estado debe ser "Active" o "canceled".`);
    }
    appointments[appointmentIndex]={
        ...appointments[appointmentIndex],
        ...updatedFields,
    };
    return appointments[appointmentIndex];
};   
export const deleteAppointmentService = async(id:number):Promise<void> =>{
    const appointmentIndex = appointments.findIndex((appointment) => appointment.id === id);

    if (appointmentIndex === -1) {
        throw new Error(`Turno con el id:${id} no ha podido ser encontrado`)
    }
    appointments.splice(appointmentIndex, 1);
};
