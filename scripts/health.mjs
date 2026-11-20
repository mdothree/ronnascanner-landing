// Writes health.json (build stamp) at deploy time. Additive: no server, no secrets.
import { writeFileSync } from 'node:fs';
const stamp = {
  build: process.env.VERCEL_DEPLOYMENT_ID || 'local',
  sha: process.env.VERCEL_GIT_COMMIT_SHA || 'unknown',
  built_at: new Date().toISOString(),
};
writeFileSync('health.json', JSON.stringify(stamp) + '\n');
