import express, { urlencoded } from "express";
import statusRoute from "./routes/status.route";
import usersRoute from "./routes/users.route";
//Instanciar express
//gerenciamento de rotas
//Receber e enviar infos atraves do protocolo http
//A partir do "app" ir'a ser configurado todas as rotas
const app = express();

///configurações da aplicação
app.use(express.json());
app.use(urlencoded({ extended: true }));
//Express usando a configuração que criamos
app.use(usersRoute);
app.use(statusRoute);

//escutar a porta 3000 e imprimir que esta rodando
app.listen(3000, () => {
  console.info("Running...");
});
