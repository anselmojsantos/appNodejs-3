import { sql } from "./db.js";

//sql`DROP TABLE IF EXISTS videos;`.then(()=>{
//    console.log('Tabela apagada!')
//})

sql`
    CREATE TABLE videos(
        id          text primary key,
        title       text,
        description text,
        duration    integer
    );
    `.then(() =>{
        console.log('Table criada!')
    })

 