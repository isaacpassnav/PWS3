import IAppointment from "../interfaces/IAppointment";

const appointments : IAppointment[] = [];
let appointmentId = 0

export const getAllAppointmentsService = async(): Promise<IAppointment []> => {
    const allAppointmens = appointments;
    return allAppointmens;
};

export const getAppointmentByIdService = async (id: number): Promise<IAppointment []> =>{
    const foundAppointment: IAppointment | undefined =  appointments.find((appointment) => appointment.id ==id);

    if(!foundAppointment) throw new Error(`Turno con el Id: ${id} no fue encontrado`);
    return appointments

}
