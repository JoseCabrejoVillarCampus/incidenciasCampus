import mysql from 'mysql2';
import {Router} from 'express';
import proxyTeclado from '../middleware/tecladomiddleware.js';
const storageTeclado = Router();
let con = undefined;

storageTeclado.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageTeclado.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT teclado.id_teclado, teclado.marca_teclado, teclado.color_teclado, estado.nombre_estado AS estado_pantalla
            FROM teclado
            INNER JOIN estado ON teclado.estado_teclado = estado.id_estado
            WHERE id_teclado = ?`, req.params.id]
        : [`SELECT teclado.id_teclado, teclado.marca_teclado, teclado.color_teclado, estado.nombre_estado AS estado_teclado
            FROM teclado
            INNER JOIN estado ON teclado.estado_teclado = estado.id_estado`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
});

storageTeclado.post("/", proxyTeclado ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO teclado SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear teclado:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageTeclado.put("/:id", proxyTeclado ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE teclado SET ?  WHERE id_teclado = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar teclado:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageTeclado.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM teclado WHERE id_teclado = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar teclado:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageTeclado;