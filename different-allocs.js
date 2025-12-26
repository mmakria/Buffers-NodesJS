const { Buffer } = require("buffer");

const buffer = Buffer.alloc(10000);

//Non safe. cela peut reprendre des données existantes. Risque de sécurité
const unsafeBuffer = Buffer.allocUnsafe(100);
const buff = Buffer.allocUnsafeSlow(); // celui ci ne va pas utiliser le Buffer.poolSize()

for (let i = 0; i < unsafeBuffer.length; i++) {
  if (unsafeBuffer[i] !== 0) {
    console.log(
      `Element at position ${i} has value: ${unsafeBuffer[i].toString(2)}`
    );
  }
}

// 5656 >>> 1 =2828. -> permets de faire des division sur les bits en flippant les 1
// Les deux methodes en dessous utilise Buffer.allocUnsafe() mais fonctionne bien car juste après ils écrivent dans le Buffer
// Buffer.from()
// Buffer.concat()

console.log(Buffer.poolSize); // 8kib peut etre utilisé par Buffer.allocUnsafe() uniquement. Seulement si la taille  est inf au calcul ci-dessous
console.log(Buffer.poolSize >>> 1);
