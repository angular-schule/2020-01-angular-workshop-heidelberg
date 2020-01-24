function connect2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  });
}

function read2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  });
}

function close2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 2000);
  });
}

/********************************************/

connect2()
  .then(() => console.log('Connected'))
  .then(() => read2())
  .then(() => console.log('Read'))
  .then(() => close2())
  .then(() => console.log('Closed'));
