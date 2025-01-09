const express = require('express');
       const morgan = require('morgan');
       const app = express();
       const PORT = process.env.PORT || 3000;

       app.use(morgan('dev'));
       app.use(express.json());

       app.get('/', (req, res) => {
         res.send('Hello World');
       });

       app.listen(PORT, () => {
         console.log(`Server is running on port ${PORT}`);
       });

       const { PrismaClient } = require('@prisma/client');
       const prisma = new PrismaClient();

       app.post('/user', async (req, res) => {
         const { name, email } = req.body;
         const user = await prisma.user.create({
           data: {
             name,
             email,
           },
         });
         res.json(user);
       });
