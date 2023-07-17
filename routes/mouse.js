import mysql from 'mysql2';
import {Router} from 'express';
import proxyMouse from '../middleware/mousemiddleware.js';
const storageMouse = Router();
let con = undefined;

storageMouse.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageMouse.get("/:id?", (req, res) => {
    let sql = (req.params.id)
        ? [`SELECT mouse.id_mouse, mouse.marca_mouse, mouse.color_mouse, estado.nombre_estado AS estado_mouse
            FROM mouse
            INNER JOIN estado ON mouse.estado_mouse = estado.id_estado
            WHERE mouse.id_mouse = ?`, req.params.id]
        : [`SELECT mouse.id_mouse, mouse.marca_mouse, mouse.color_mouse, estado.nombre_estado AS estado_mouse
            FROM mouse
            INNER JOIN estado ON mouse.estado_mouse = estado.id_estado`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
});


storageMouse.post("/", proxyMouse ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO mouse SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear mouse:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageMouse.put("/:id", proxyMouse ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE mouse SET ?  WHERE id_mouse = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar mouse:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageMouse.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM mouse WHERE id_mouse = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar mouse:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageMouse;