//############# POLKA LOVER ###############
async function letsDance(danceStyle) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (danceStyle === 'polka') {
        resolve('polka');
      } else {
        reject('not polka');
      }
    }, 2000);
  });
}

async function checkDance() {
  try {
    const fromResolve = await letsDance('polka');
    console.log(`The dance is ${fromResolve}`);
  } catch (fromReject) {
    console.log(`The dance is ${fromReject}`);
  }
}

checkDance();

//############# WEBBPROJEKTET ###############

function doResearch() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('1. Researcha målgruppen');
    }, 4000);
  });
}

function sketchDesign() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('2. Skissa upp en design på papper');
    }, 2000);
  });
}

function pixelPerfect() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('3. Gör skissen till pixel perfect mockup i figma/XD');
    }, 3000);
  });
}

function writeCode() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('4. Koda');
    }, 3000);
  });
}

function stackOverFlow() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('5. Stackoverflowa fel');
    }, 1000);
  });
}

function testTheProduct() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('6. Testa produkten');
    }, 2000);
  });
}

function celebrate() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('7. Fira lyckat projekt');
    }, 1000);
  });
}

const logToConsole = async () => {
  console.log(await doResearch());
  console.log(await sketchDesign());
  console.log(await pixelPerfect());
  console.log(await writeCode());
  console.log(await stackOverFlow());
  console.log(await testTheProduct());
  console.log(await celebrate());
};

logToConsole();
