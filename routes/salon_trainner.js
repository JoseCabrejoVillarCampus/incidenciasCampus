import mysql from 'mysql2';
import {Router} from 'express';
import proxySalonTrainner from '../middleware/salon_trainnermiddleware.js';
const storageSalonTrainner = Router();
let con = undefined;

storageSalonTrainner.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageSalonTrainner.get("/:id?", proxySalonTrainner ,(req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT 
        pu.id_salon_trainner,
        p.nombre_salon AS nombre_salon,
        u.nombre_trainner AS nombre_trainner
    FROM salon_trainner pu
    INNER JOIN salon p ON pu.id_salon = p.id_salon
    INNER JOIN trainners u ON pu.id_trainner = u.id_trainner
            WHERE salon_trainner.id_salon_trainner = ?`, req.params.id]
        : [`SELECT 
        pu.id_salon_trainner,
        p.nombre_salon AS nombre_salon,
        u.nombre_trainner AS nombre_trainner
    FROM salon_trainner pu
    INNER JOIN salon p ON pu.id_salon = p.id_salon
    INNER JOIN trainners u ON pu.id_trainner = u.id_trainner;`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
})

storageSalonTrainner.post("/", proxySalonTrainner ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO salon_trainner SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear salon_trainner:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageSalonTrainner.put("/:id", proxySalonTrainner ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE salon_trainner SET ?  WHERE id_salon_trainner = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar salon_trainner:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageSalonTrainner.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM salon_trainner WHERE id_salon_trainner = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar salon_trainner:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageSalonTrainner;