import { info } from "console";
import express, { Request, Response, NextFunction } from "express";

//Instanciar express
//gerenciamento de rotas
//Receber e enviar infos atraves do protocolo http
//A partir do "app" ir'a ser configurado todas as rotas
const app = express();

//Quando chegar uma requisicão do tipo GET com "/status" for chamado execute callback a seguir
app.get("/status", (req: Request, res: Response, next: NextFunction) => {
  //Quando a requisição for feita nossa resposta sera o status 200 e o seguinte json
  res.status(200).send({ foo: "200: ok" });
});

//escutar a porta 3000 e imprimir que esta rodando
app.listen(3000, () => {
  console.log(info("Running..."));
});
