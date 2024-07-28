import 'dotenv/config';
import { exec } from 'child_process';

exec(
  `createdb -O ${process.env.DATABASE_USER} -E UTF8 ${process.env.DATABASE_NAME}`,
  (error, stdout, stderr) => {
    if (error || stderr) {
      console.error(`exec error: ${error || stderr}`);
      return;
    }

    console.info(`Database ${process.env.DATABASE_NAME} created`);
  },
);
