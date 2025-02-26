// Language: JavaScript
const express = require('express');
const app = express();
const port = 3000;

function getFormattedTimestamp() {
    // Utiliza Intl.DateTimeFormat para obtener un formato de fecha y hora más profesional
    const formatter = new Intl.DateTimeFormat('es-ES', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    return formatter.format(new Date());
}

app.get('/api', (req, res) => {
    res.json({
        mensaje: 'Hola desde la API REST en Node.js ヽ(o＾▽＾o)ノ☆',
        hora: getFormattedTimestamp()
    });
});

app.get('/api/details', (req, res) => {
    res.json({
        servicio: 'API REST en Node.js',
        version: '1.0.1',
        descripcion: 'API mejorada con endpoints adicionales para un uso avanzado.'
    });
});

// Nuevas rutas adicionales para consumir desde la interfaz web

app.get('/api/info', (req, res) => {
    res.json({
        info: 'Esta API está diseñada para demostrar el uso de endpoints en Node.js con Express.',
        fecha: getFormattedTimestamp()
    });
});

app.get('/api/users', (req, res) => {
    res.json({
        usuarios: ['Juan', 'María', 'Carlos'],
        total: 3,
        fecha: getFormattedTimestamp()
    });
});

app.listen(port, () => {
    console.log(`El servidor de la API está funcionando en http://localhost:${port}`);
});