import mysql from 'mysql2';
import {Router} from 'express';
import proxyEmail from '../middleware/emailmiddleware.js';
const storageEmail = Router();
let con = undefined;

storageEmail.use((req, res, next) => {

    let myConfig = JSON.parse(process.env.MY_CONNECT);
    con = mysql.createPool(myConfig)
    next();
})

storageEmail.get("/:id?", proxyEmail ,(req,res)=>{
    let sql = (req.params.id)
        ? [`SELECT id_email, email,
        trainners.nombre_trainner AS trainner_email
        FROM telefono 
        INNER JOIN trainners  ON trainner_email = trainners.id_trainner
            WHERE id_email = ?`, req.params.id]
        : [`SELECT id_email, numero_email,
        trainners.nombre_trainner AS trainner_email
        FROM email 
        INNER JOIN trainners  ON trainner_email = trainners.id_trainner;`];
    con.query(...sql,
        (err, data, fie) => {
            res.send(data);
        }
    );
})

storageEmail.post("/", proxyEmail ,(req, res) => {
    con.query(
        /*sql*/
        `INSERT INTO email SET ?`,
        req.body,
        (err, result) => {
            if (err) {
                console.error('Error al crear email:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
        }
    );
});


storageEmail.put("/:id", proxyEmail ,(req, res) => {
    con.query(
        /*sql*/
        `UPDATE email SET ?  WHERE id_email = ?`,
        [req.body, req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al actualizar email:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});
storageEmail.delete("/:id",(req, res) => {
    con.query(
        /*sql*/
        `DELETE FROM email WHERE id_email = ?`,
        [req.params.id],
        (err, result) => {
            if (err) {
                console.error('Error al eliminar email:', err.message);
                res.sendStatus(500);
            } else {
                res.sendStatus(200);
            }
        }
    );
});


export default storageEmail;