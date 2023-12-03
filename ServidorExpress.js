
import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(200).send('Hola, Bienvenido al Servidor web con Express.');
});

app.listen(port, () => {
    console.log(`Servidor Express corriendo en http://localhost:${port}`);
});
