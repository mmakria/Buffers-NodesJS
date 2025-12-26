const { buffer } = require("buffer");
const memoryContainer = Buffer.alloc(4); // 4 bytes (32 bits)

memoryContainer[0] = 0xf4;
memoryContainer[1] = 0x34;
memoryContainer[2] = 0x00;
memoryContainer[3] = 0x12;
console.log(memoryContainer);

for (let i = 0; i < memoryContainer.length; i++) {
  console.log(memoryContainer[i]);
}

console.log(memoryContainer.toString("hex"));

// -------

// const buff = Buffer.from([0x48, 0x69, 0x21]);
// console.log(buff.toString("utf-8"));
//  ------

const buff = Buffer.from("486921", "hex");
console.log(buff);
console.log(buff.toString("utf-8"));

console.log(Buffer);
