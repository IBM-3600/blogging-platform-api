//blogging platform api
import express from 'express';
import blogRoutes from './controller/blogController';
import userRoutes from './controller/userController';

const app = express();
const port = 3000;
app.use(express.json());
app.use('/api/blogs', blogRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Blogging Platform API! Home');
});

app.listen(port, () => {        
  console.log(`Blogging Platform API is running on http://localhost:${port}`);
});