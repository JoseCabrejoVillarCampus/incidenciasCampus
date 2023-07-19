import mysql from 'mysql2';
import {Router} from 'express';
import proxyPantalla from '../middleware/pantallamiddleware.js';
const storagePantalla = Router();
let con = undefined;

storagePantalla.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storagePantalla.get("/:id?", proxyPantalla ,(req, res) => {
    let sql = (req.params.id)
        ? [`SELECT pantalla.id_pantalla, pantalla.marca_pantalla, pantalla.color_pantalla, estado.nombre_estado AS estado_pantalla
            FROM pantalla
            INNER JOIN estado ON pantalla.estado_pantalla = estado.id_estado
            WHERE id_pantalla = ?`, req.params.id]
        : [`SELECT pantalla.id_pantalla, pantalla.marca_pantalla, pantalla.color_pantalla, estado.nombre_estado AS estado_pantalla
            FROM pantalla
            INNER JOIN estado ON pantalla.estado_pantalla = estado.id_estado`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
});


storagePantalla.post("/", proxyPantalla ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO pantalla SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear pantalla:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storagePantalla.put("/:id", proxyPantalla ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE pantalla SET ?  WHERE id_pantalla = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar pantalla:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storagePantalla.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM pantalla WHERE id_pantalla = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar pantalla:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storagePantalla;