interface IAppointment{
    id: number,
    date: string,
    time:   number,
    userId: number,
    satus: "Active" | "Cancelled"
}

export default IAppointment;
