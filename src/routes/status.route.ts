import { NextFunction, Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

const statusRoute = Router();
//Quando chegar uma requisicão do tipo GET com "/status" for chamado execute callback a seguir
statusRoute.get(
  "/status",
  (req: Request, res: Response, next: NextFunction) => {
    //Quando a requisição for feita nossa resposta sera o status 200 e o seguinte json
    res.sendStatus(StatusCodes.OK);
  }
);
export default statusRoute;
