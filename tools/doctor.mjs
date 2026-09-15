import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
console.log(`Node: ${process.version}`);
if (Number(process.versions.node.split('.')[0]) < 22) process.exitCode = 1;
for (const command of ['git', 'dotnet']) {
  const result = spawnSync(command, ['--version'], { encoding: 'utf8' });
  console.log(`${command}: ${result.status === 0 ? result.stdout.trim() : 'not found (dotnet is optional until standalone simulation tooling is chosen)'}`);
  if (command === 'git' && result.status !== 0) process.exitCode = 1;
}
const editor = process.env.UNITY_EDITOR_PATH;
console.log(`Unity: ${editor && existsSync(editor) ? editor : 'not verified; set UNITY_EDITOR_PATH to the installed Unity.exe'}`);
console.log('Repository checks do not verify Unity compilation or Windows/Android builds.');
