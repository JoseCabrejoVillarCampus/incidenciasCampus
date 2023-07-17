import mysql from 'mysql2';
import {Router} from 'express';
import proxyTipoIncidencia from '../middleware/tipo_incidencia.js';
const storageTipoIncidencia = Router();
let con = undefined;

storageTipoIncidencia.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageTipoIncidencia.get("/:id?", (req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT * FROM tipo_incidencia WHERE id_tipo_incidencia = ?`, req.params.id]
        : [`SELECT * FROM tipo_incidencia`];
    con.query(...sql,
        (err, data, fie)=>{
            res.send(data);
        }
    );
})

storageTipoIncidencia.post("/", proxyTipoIncidencia ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO tipo_incidencia SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear tipo:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageTipoIncidencia.put("/:id", proxyTipoIncidencia ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE tipo_incidencia SET ?  WHERE id_tipo_incidencia = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar tipo:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageTipoIncidencia.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM tipo_incidencia WHERE id_tipo_incidencia = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar genero:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageTipoIncidencia;