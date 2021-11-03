const animation = '|/-\\'
const spins = 2;
const steps = 4;
let interval = 0;
for (let i = 0; i < spins * steps; i++) {
  interval = i * 200 +100;
  setTimeout(() => {
    process.stdout.write(`\r${animation[i % steps]}`);
  }, interval)
};
setTimeout(() => {
  process.stdout.write(`\r\n`)
}, interval)
