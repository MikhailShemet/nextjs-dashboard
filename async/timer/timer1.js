//node timer1.js 10 3 5 15 9 
//const stdOut = process.stdout; //system sound
const arg = process.argv.slice(2); //take in the arguments from the command line

const timer = function(number) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, number * 1000);
};

for (let i = 0; i < arg.length; i++) {
  timer(arg[i]);
}

