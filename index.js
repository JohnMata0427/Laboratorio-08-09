import express from 'express';

const app = express();

const PORT = process.env.PORT || 3000; // Se obtiene el puerto del archivo .env

const integrantesDB = [
    { id: 0, nombre: 'John', apellido: 'Mata', edad: 21, correo: 'john.mata@epn.edu.ec'},
    { id: 1, nombre: 'Alejandro', apellido: 'Minga', edad: 21, correo: 'anthony.minga@epn.edu.ec'},
    { id: 2, nombre: 'Dustin', apellido: 'Marcatoma', edad: 20, correo: 'dustin.marcatoma@epn.edu.ec'},
    { id: 3, nombre: 'Estefania', apellido: 'Sanchez', edad: 30, correo: 'estefania.sanchez@epn.edu.ec'},
    { id: 4, nombre: 'Samuel', apellido: 'Cuti', edad: 21, correo: 'robsamuel.cuti@epn.edu.ec'},
    { id: 5, nombre: 'Alan', apellido: 'Rios', edad: 21, correo: 'alan.rios@epn.edu.ec'}
]

// Primero van las Rutas
app.get('/', (_, res) => { // Nosotros como servidor enviamos la respuesta al cliente:
    res.send('Laboratorio 08-09\n\nIntroduction to ExpressJS\n'); // send: envia un texto
})

app.get('/integrantes', (_, res) => {
    res.json(integrantesDB);
});

app.get('/integrantes/:id', (req, res) => { // :id es un parametro que se envia por la URL
    const { id } = req.params;
    res.json(integrantesDB[id]);
});

app.get('/products', (_, res) => {
    res.send(`<h1>Productos</h1>
    <ul>
        <li>Papitas</li>
        <li>Hamburguesa</li>
        <li>Pizza</li>
    </ul>
    <button onclick="window.location.href='/'">Home</button>
    <button onclick="window.location.href='/integrantes'">Integrantes</button>
    <style>
        h1 {
            color: #333;
            font-family: Arial, sans-serif;
        }

        ul {
            list-style-type: none;
            padding: 0;
        }

        li {
            padding: 10px;
            margin: 10px;
            background-color: #f9f9f9;
        }

        button {
            padding: 10px;
            margin: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
    </style>
    `)
});

// Segundo van los Middlewares, que son conjunto de reglas que se ejecutan antes de llegar a las rutas
app.use(express.json()); // Middleware para parsear a JSON

app.use((_, res) => { // Middleware para paginas no encontradas
    res.status(404).send({ message: 'Page Not Found - 404' });
})

// Tercero va el servidor
app.listen(PORT, () => { // Se inicia el servidor en el puerto 3000
    console.log(`Server is running on http://localhost:${PORT}`);
});