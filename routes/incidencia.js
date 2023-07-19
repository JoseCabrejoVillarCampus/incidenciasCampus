import mysql from 'mysql2';
import {Router} from 'express';
import proxyIncidencia from '../middleware/incidenciamiddleware.js';
const storageIncidencia = Router();
let con = undefined;

storageIncidencia.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageIncidencia.get("/:id?", proxyIncidencia ,(req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT incidencia.id_incidencia, categoria.id_categoria, categoria.tipo_categoria, tipo_incidencia.id_tipo_incidencia, tipo_incidencia.tipo_incidencia,
            incidencia.descripcion_incidencia, reporte_incidencia.id_reporte, area.id_area, area.nombre_area, salon.id_salon, salon.nombre_salon,
            trainners.id_trainner, trainners.nombre_trainner
            FROM incidencia
            INNER JOIN categoria ON incidencia.categoria_incidencia = categoria.id_categoria
            INNER JOIN tipo_incidencia ON incidencia.tipo_incidencia = tipo_incidencia.id_tipo_incidencia
            INNER JOIN reporte_incidencia ON incidencia.fecha_incidencia = reporte_incidencia.id_reporte
            INNER JOIN equipo ON incidencia.equipo_incidencia = equipo.id_equipo
            INNER JOIN salon ON incidencia.lugar_incidencia = salon.id_salon
            INNER JOIN area ON salon.area_salon = area.id_area
            INNER JOIN trainners ON incidencia.trainner_reporta_incidencia = trainners.id_trainner
            WHERE incidencia.id_incidencia = ?`, req.params.id]
        : [`SELECT incidencia.id_incidencia, categoria.id_categoria, categoria.tipo_categoria, tipo_incidencia.id_tipo_incidencia, tipo_incidencia.tipo_incidencia,
            incidencia.descripcion_incidencia, reporte_incidencia.id_reporte, area.id_area, area.nombre_area, salon.id_salon, salon.nombre_salon,
            trainners.id_trainner, trainners.nombre_trainner
            FROM incidencia
            INNER JOIN categoria ON incidencia.categoria_incidencia = categoria.id_categoria
            INNER JOIN tipo_incidencia ON incidencia.tipo_incidencia = tipo_incidencia.id_tipo_incidencia
            INNER JOIN reporte_incidencia ON incidencia.fecha_incidencia = reporte_incidencia.id_reporte
            INNER JOIN equipo ON incidencia.equipo_incidencia = equipo.id_equipo
            INNER JOIN salon ON incidencia.lugar_incidencia = salon.id_salon
            INNER JOIN area ON salon.area_salon = area.id_area
            INNER JOIN trainners ON incidencia.trainner_reporta_incidencia = trainners.id_trainner`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
})

storageIncidencia.post("/", proxyIncidencia ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO incidencia SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear incidencia:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageIncidencia.put("/:id", proxyIncidencia ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE incidencia SET ?  WHERE id_incidencia = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar incidencia:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageIncidencia.delete("/:id",(req, res) => {
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


export default storageIncidencia;