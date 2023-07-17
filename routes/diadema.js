import mysql from 'mysql2';
import {Router} from 'express';
import proxyDiadema from '../middleware/diademamiddleware.js';
const storageDiadema = Router();
let con = undefined;

storageDiadema.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageDiadema.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT diadema.id_diadema, diadema.marca_diadema, diadema.color_diadema, estado.nombre_estado AS estado_diadema
            FROM diadema
            INNER JOIN estado ON diadema.estado_diadema = estado.id_estado
            WHERE id_diadema = ?`, req.params.id]
        : [`SELECT diadema.id_diadema, diadema.marca_diadema, diadema.color_diadema, estado.nombre_estado AS estado_diadema
            FROM diadema
            INNER JOIN estado ON diadema.estado_diadema = estado.id_estado`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
})

storageDiadema.post("/", proxyDiadema ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO diadema SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear diadema:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageDiadema.put("/:id", proxyDiadema ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE diadema SET ?  WHERE id_diadema = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar diadema:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageDiadema.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM diadema WHERE id_diadema = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar diadema:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageDiadema;