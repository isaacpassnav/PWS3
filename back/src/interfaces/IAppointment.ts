interface IAppointment{
    id: number,
    date: Date,
    time:   "HH:mm",
    userId: number,
    status: "Active" | "Cancelled"
}
export default IAppointment;
