import fs from 'fs';
import { execSync } from 'node:child_process';
import path from 'node:path';

execSync('npm run build', { stdio: 'inherit' });

fs.cpSync(
  // path.resolve(__dirname, '../vue2-playground/dist'),
  path.resolve(__dirname, '../vue2.7-playground/dist'),
  path.resolve(__dirname, '../dist'),
  { recursive: true }
);

let command = 'npm publish --access public';

command += ' --tag latest';

execSync(command, { stdio: 'inherit' });
