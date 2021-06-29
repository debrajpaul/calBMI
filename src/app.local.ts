import path from 'path'
import dotenv from 'dotenv';

console.log(path.join(__dirname,".env"));
dotenv.config({ path: path.join(__dirname,".env.test")});

process.env.LOCAL = 'true';

import app from './app';

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is listening on port ${port}`));
