import Os from "node:os";

//Os Arch

console.clear();

const a = Os.arch();
console.log("My Computer Architure is...", a);

// Cpus

const b = Os.cpus();
console.log("My pc model is...", b[0].model);

console.clear();

// Freeman

const c = Os.freemem();
console.log("My pc Memory....", c / 1204 / 1204);

// Homedir

const d = Os.homedir();
console.log("My pc Directory...", d);

console.clear();
// version

const e = Os.version();
console.log("My pc Version...", e);

// release

const f = Os.release();
console.log("My pc release date is...", f);

// platform

const g = Os.platform();
console.log("My pc platform ...", g);

// hostname

const h = Os.hostname();
console.log("My pc hostname ...", h);

// networkinterfaces

const i = Os.networkInterfaces();
console.log("My pc networkinterfaces ...", i);

// machine
const j = Os.machine();
console.log("My pc machine ...", j);

// Type

const k = Os.type();
console.log("My pc type ...", k);

// pc uptime

const l = Os.uptime();
console.log("My pc uptime ...", l);

// checkspace
const checkmyspace = () => {
  let mem: number = Os.freemem() / (1024 * 1024 * 1024);
  let totalmem: number = Os.totalmem() / (1024 * 1024 * 1024);

  console.log(`${parseFloat(totalmem.toFixed(2))}GB space Remaining`);
};

checkmyspace();
