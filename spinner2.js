const characters = ['|     ', '/     ', '-     ', '\\     ', '|     ', '/     ', '-     ', '\\     ', '|     '];
let delay = 100;

for (let i = 0; i < characters.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${characters[i]}`);
  }, delay);
  delay += 200;
}
