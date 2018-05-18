const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaBiscuits () {
  let teaReply;
  let biscuitReply;

  reader.question('Would you like tea?', function (answer){
    console.log(`You said ${answer} to tea`);
    reader.question('Would you like biscuits?', function (answer2) {
      console.log(`You said ${answer} to tea and ${answer2} to biscuits`);
      reader.close();
  });
  });

}

teaBiscuits();
