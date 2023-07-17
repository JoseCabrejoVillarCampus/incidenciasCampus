import mysql from 'mysql2';
import {Router} from 'express';
import proxyTorre from '../middleware/torremiddleware.js';
const storageTorre = Router();
let con = undefined;

storageTorre.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageTorre.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT torre.id_torre, torre.marca_torre, torre.color_torre, estado.nombre_estado AS estado_torre
            FROM torre
            INNER JOIN estado ON torre.estado_torre = estado.id_estado
            WHERE id_torre = ?`, req.params.id]
        : [`SELECT torre.id_torre, torre.marca_torre, torre.color_torre, estado.nombre_estado AS estado_torre
        FROM torre
        INNER JOIN estado ON torre.estado_torre = estado.id_estado`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
})

storageTorre.post("/", proxyTorre ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO torre SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear torre:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageTorre.put("/:id", proxyTorre ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE torre SET ?  WHERE id_torre = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar torre:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageTorre.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM torre WHERE id_torre = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar torre:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageTorre;