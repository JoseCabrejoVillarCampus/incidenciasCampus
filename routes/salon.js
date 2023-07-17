import mysql from 'mysql2';
import {Router} from 'express';
import proxySalon from '../middleware/salonmiddleware.js';
const storageSalon = Router();
let con = undefined;

storageSalon.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageSalon.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT salon.id_salon, salon.nombre_salon, trainners.id_trainner, trainners.nombre_trainner, area.id_area, area.nombre_area
            FROM salon
            INNER JOIN trainners ON salon.trainner_salon = trainners.id_trainner
            INNER JOIN area ON salon.area_salon = area.id_area
            WHERE salon.id_salon = ?`, req.params.id]
        : [`SELECT salon.id_salon, salon.nombre_salon, trainners.id_trainner, trainners.nombre_trainner, area.id_area, area.nombre_area
            FROM salon
            INNER JOIN trainners ON salon.trainner_salon = trainners.id_trainner
            INNER JOIN area ON salon.area_salon = area.id_area`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
})

storageSalon.post("/", proxySalon ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO salon SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear salon:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageSalon.put("/:id", proxySalon ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE salon SET ?  WHERE id_salon = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar salon:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageSalon.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM salon WHERE id_salon = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar salon:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageSalon;