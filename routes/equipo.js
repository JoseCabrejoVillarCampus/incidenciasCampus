import mysql from 'mysql2';
import {Router} from 'express';
import proxyEquipo from '../middleware/equipomiddleware.js';
const storageEquipo = Router();
let con = undefined;

storageEquipo.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageEquipo.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT equipo.id_equipo, pantalla.id_pantalla, pantalla.marca_pantalla, pantalla.color_pantalla,
                torre.id_torre, torre.marca_torre, torre.color_torre,
                teclado.id_teclado, teclado.marca_teclado, teclado.color_teclado,
                mouse.id_mouse, mouse.marca_mouse, mouse.color_mouse,
                diadema.id_diadema, diadema.marca_diadema, diadema.color_diadema,
                salon.id_salon, salon.nombre_salon
            FROM equipo
            INNER JOIN pantalla ON equipo.pantalla_equipo = pantalla.id_pantalla
            INNER JOIN torre ON equipo.torre_equipo = torre.id_torre
            INNER JOIN teclado ON equipo.teclado_equipo = teclado.id_teclado
            INNER JOIN mouse ON equipo.mouse_equipo = mouse.id_mouse
            INNER JOIN diadema ON equipo.diadema_equipo = diadema.id_diadema
            INNER JOIN salon ON equipo.salon_equipo = salon.id_salon
            WHERE equipo.id_equipo = ?`, req.params.id]
        : [`SELECT equipo.id_equipo, pantalla.id_pantalla, pantalla.marca_pantalla, pantalla.color_pantalla,
                torre.id_torre, torre.marca_torre, torre.color_torre,
                teclado.id_teclado, teclado.marca_teclado, teclado.color_teclado,
                mouse.id_mouse, mouse.marca_mouse, mouse.color_mouse,
                diadema.id_diadema, diadema.marca_diadema, diadema.color_diadema,
                salon.id_salon, salon.nombre_salon
            FROM equipo
            INNER JOIN pantalla ON equipo.pantalla_equipo = pantalla.id_pantalla
            INNER JOIN torre ON equipo.torre_equipo = torre.id_torre
            INNER JOIN teclado ON equipo.teclado_equipo = teclado.id_teclado
            INNER JOIN mouse ON equipo.mouse_equipo = mouse.id_mouse
            INNER JOIN diadema ON equipo.diadema_equipo = diadema.id_diadema
            INNER JOIN salon ON equipo.salon_equipo = salon.id_salon`];
    con.query(...sql, (err, data, fie) => {
        res.send(data);
    });
})

storageEquipo.post("/", proxyEquipo ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO equipo SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear equipo:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageEquipo.put("/:id", proxyEquipo ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE equipo SET ?  WHERE id_equipo = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar equipo:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageEquipo.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM equipo WHERE id_equipo = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar equipo:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageEquipo;