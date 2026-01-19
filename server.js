const express = require('express');
const connectDB = require('./src/config/database');
const authRoutes = require('./src/routes/authRoutes');


const app = express();

connectDB();

app.use(express.json());
app.use('/api/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
