//Permite criar configuração de rotas
import { NextFunction, Router, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
//instancia Router
const usersRoute = Router();
//* get /users
usersRoute.get("/users", (req: Request, res: Response, next: NextFunction) => {
  let users = req.body;
  console.log(users);
  res.status(StatusCodes.OK).json({ users });
});
//* get /users/:id
usersRoute.get(
  "/users/:uuid",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    // TYPE: Params Dictionary
    const uuid = req.params.uuid;
    res.status(StatusCodes.OK).send({ uuid });
  }
);
//* post /users
usersRoute.post(
  "/users",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const newUser = req.body;
    console.log(newUser);

    res.status(StatusCodes.CREATED).send(newUser);
  }
);
//* out /users/:id
usersRoute.put(
  "/users/:uui",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    const usuario = req.body;
    usuario.uuid = uuid;
    res.status(StatusCodes.OK).send({ usuario });
  }
);
//* delete / users/:id
usersRoute.delete(
  "/users/:uui",
  (req: Request<{ uuid: string }>, res: Response, next: NextFunction) => {
    res.status(StatusCodes.OK).send(console.log("usuário deletado"));
  }
);

export default usersRoute;
