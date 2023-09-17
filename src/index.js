import appServer from "./server/server.js";
import config from "./config/config.js";

const start = async ()=>{
    try {
        await appServer.listen(config);
        console.log(`Rodando na porta ${config.port}`)
    } catch (err) {
        console.error('Erro ao iniciar o servidor ', err);
    }
}

start();