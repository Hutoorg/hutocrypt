const express = require("express");
const app = express();
const port = 443;

const translationTableEncrypt = {
  A: "dRivz1/",
  B: "yALTKu/",
  C: "NlYS4A/",
  D: "5TYpN7/",
  E: "2abgYi/",
  F: "cfpbKl/",
  G: "W4hBUJ/",
  H: "hclMOS/",
  I: "123sQ4/",
  J: "Vu2Fwr/",
  K: "8vkfeR/",
  L: "e7FVd0/",
  M: "CkAXws/",
  N: "frkvmn/",
  O: "8ZKqEV/",
  P: "mjeGZU/",
  Q: "4OQEn6/",
  R: "tJAZDe/",
  S: "YMftGw/",
  T: "h5yJdn/",
  U: "KOW0ef/",
  V: "WGS8JK/",
  W: "P5ZaTw/",
  X: "zSwHQ4/",
  Y: "BHSmQF/",
  Z: "tkYbgO/",
  a: "2euBlr/",
  b: "JSK4Y2/",
  c: "pgBdKV/",
  d: "ZBQ10b/",
  e: "pYabSs/",
  f: "CdM4EQ/",
  g: "S5NgGh/",
  h: "nm0TLB/",
  i: "GTx0wc/",
  j: "OERDTY/",
  k: "yAu8tC/",
  l: "hLoTU5/",
  m: "0aSNqh/",
  n: "7R4QXe/",
  o: "A95RmH/",
  p: "bMVQZ3/",
  q: "WagT4V/",
  r: "tA04Pc/",
  s: "xtVUs7/",
  t: "PLrmgB/",
  u: "G5BcQ7/",
  v: "wdLkEf/",
  w: "JnZFiE/",
  x: "VutazG/",
  y: "hUD1gG/",
  z: "ogPySu/",
  0: "Yyv7W5/",
  1: "7LqIp9/",
  3: "wyDIQd/",
  4: "KEclZY/",
  5: "E5Axkd/",
  6: "YRqCJ9/",
  7: "onrzHk/",
  8: "nPxyu9/",
  9: "24WNIU/",
  "-": "bGOMkY/",
  _: "cjXfDq/",
};

const translationTableDecrypt = {
  Yyv7W5: "0",
  "7LqIp9": "1",
  wyDIQd: "3",
  KEclZY: "4",
  E5Axkd: "5",
  YRqCJ9: "6",
  onrzHk: "7",
  nPxyu9: "8",
  "24WNIU": "9",
  dRivz1: "A",
  yALTKu: "B",
  NlYS4A: "C",
  "5TYpN7": "D",
  "2abgYi": "E",
  cfpbKl: "F",
  W4hBUJ: "G",
  hclMOS: "H",
  "123sQ4": "I",
  Vu2Fwr: "J",
  "8vkfeR": "K",
  e7FVd0: "L",
  CkAXws: "M",
  frkvmn: "N",
  "8ZKqEV": "O",
  mjeGZU: "P",
  "4OQEn6": "Q",
  tJAZDe: "R",
  YMftGw: "S",
  h5yJdn: "T",
  KOW0ef: "U",
  WGS8JK: "V",
  P5ZaTw: "W",
  zSwHQ4: "X",
  BHSmQF: "Y",
  tkYbgO: "Z",
  "2euBlr": "a",
  JSK4Y2: "b",
  pgBdKV: "c",
  ZBQ10b: "d",
  pYabSs: "e",
  CdM4EQ: "f",
  S5NgGh: "g",
  nm0TLB: "h",
  GTx0wc: "i",
  OERDTY: "j",
  yAu8tC: "k",
  hLoTU5: "l",
  "0aSNqh": "m",
  "7R4QXe": "n",
  A95RmH: "o",
  bMVQZ3: "p",
  WagT4V: "q",
  tA04Pc: "r",
  xtVUs7: "s",
  PLrmgB: "t",
  G5BcQ7: "u",
  wdLkEf: "v",
  JnZFiE: "w",
  VutazG: "x",
  hUD1gG: "y",
  ogPySu: "z",
  bGOMkY: "-",
  cjXfDq: "_",
};

// Function to encrypt text
function encrypt(text) {
  let encryptedText = "";
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    if (translationTableEncrypt[char]) {
      encryptedText += translationTableEncrypt[char];
    } else {
      encryptedText += char;
    }
  }
  return encryptedText;
}

// Function to decrypt text
function decrypt(text) {
  let decryptedText = "";
  const chunks = text.split("/");

  for (let i = 0; i < chunks.length; i++) {
    const chunk = chunks[i];

    if (translationTableDecrypt[chunk]) {
      decryptedText += translationTableDecrypt[chunk];
    } else {
      decryptedText += chunk;
    }
  }

  return decryptedText;
}

// Endpoint for encrypting text (GET method with query parameter)
app.get("/encrypt", (req, res) => {
  const text = req.query.text;
  if (!text) {
    res.status(400).send({ error: "Missing required parameter: text" });
    return;
  }
  const encryptedText = encrypt(text);
  res.send({ encryptedText });
});

// Endpoint for decrypting text (GET method with query parameter)
app.get("/decrypt", (req, res) => {
  const encryptedText = req.query.encryptedText;
  if (!encryptedText) {
    res
      .status(400)
      .send({ error: "Missing required parameter: encryptedText" });
    return;
  }
  const text = decrypt(encryptedText);
  res.send({ text });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
