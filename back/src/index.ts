interface IProduct{
    name: string,
    price: number
}

type TSize = "M" | "L" | "XL";

interface IClothes extends IProduct {
    marca: string,
    size: TSize
}
interface IElectronics extends IProduct{
    marca: string
}
const clothe1 :IClothes = {
    name: "Polera",
    marca: "redbull",
    size: "M",
    price: 100,
}
const electronic1: IElectronics = {
    name: "computadora",
    marca: "Asus",
    price: 2000
}



