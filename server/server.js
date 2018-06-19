import mongoose from 'mongoose';
import dotenv from 'dotenv';
import app from './app';

const checkVersion = () => {
  const [major, minor] = process.versions.node.split('.').map(parseFloat);
  if (major < 7 || (major === 7 && minor <= 5)) {
    console.log(`You're on an older version of node that doesn't support Async and Await. Please go to nodejs.org and download version 7.6 or greater.`);
    process.exit();
  }
}

const connectDatabase = () => {
  mongoose.connect(process.env.DATABASE);
  mongoose.Promise = global.Promise; 
  mongoose.connection.on('error', (err) => {
    console.error(`🚫 Error 🚫 → ${err.message}`);
  });
}

const configEnviromentVariables = () => {
  dotenv.config({ path: 'variables.env' });
}

const startApp = () => {
  app.set('port', process.env.PORT || 7777);
  const server = app.listen(app.get('port'), () => {
    console.log(`Express running → PORT ${server.address().port}`);
  });
}

checkVersion();
configEnviromentVariables();
connectDatabase();
startApp();
