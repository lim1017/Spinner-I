const spinner = ['|', '/', '-','\\', '|', '|', '/', '-','\\', '|']
let timer = 300;
for (const i of spinner) {
  setTimeout(() => {
    process.stdout.write(`\r${i}`);
  }, timer);
  timer += 200;
}
setTimeout(() => {
  process.stdout.write('\n');
}, timer + 1)