import mysql from 'mysql2';
import {Router} from 'express';
import proxyTelefono from '../middleware/telefonomiddleware.js';
const storageTelefono = Router();
let con = undefined;

storageTelefono.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageTelefono.get("/:id?", proxyTelefono ,(req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT id_telefono, numero_telefono,
        trainners.nombre_trainner AS trainner_telefono
        FROM telefono 
        INNER JOIN trainners  ON trainner_telefono = trainners.id_trainner
            WHERE id_telefono = ?`, req.params.id]
        : [`SELECT id_telefono, numero_telefono,
        trainners.nombre_trainner AS trainner_telefono
        FROM telefono 
        INNER JOIN trainners  ON trainner_telefono = trainners.id_trainner;`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
})

storageTelefono.post("/", proxyTelefono ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO telefono SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear telefono:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageTelefono.put("/:id", proxyTelefono ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE telefono SET ?  WHERE id_telefono = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar telefono:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageTelefono.delete("/:id",(req, res) => {
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


export default storageTelefono;