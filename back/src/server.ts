import  express  from "express";
import morgan from "morgan";
import cors from "cors";
import router from "./routes/indexRouter";

const server = express();

server.use(morgan("dev")); //Muestra el tipo de solicitud que se ha realizado, la ruta, tiempo de respuesta.
server.use(cors()); //Verifica la identidad, permite o no el origen cruzado
server.use(express.json()); //Transforma el texto en formato json 
server.use(router)
export default server;
