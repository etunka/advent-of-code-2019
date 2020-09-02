// DAY 1

const list = `50572
  126330
  143503
  136703
  56987
  96737
  140243
  94427
  84262
  149323
  87398
  132344
  72187
  90878
  72897
  101305
  129483
  101148
  66349
  76719
  86437
  84937
  73911
  141051
  61464
  85350
  81774
  129191
  130129
  118366
  125825
  61781
  98459
  69024
  75886
  119434
  108929
  117387
  149625
  79378
  102582
  102368
  117177
  132105
  137278
  149187
  136653
  70074
  115885
  73901
  81922
  133232
  112929
  80009
  116895
  61248
  140251
  98003
  109610
  132775
  55781
  110809
  109799
  125071
  71734
  104973
  75610
  148974
  144173
  89235
  89438
  64901
  142674
  105446
  55287
  64438
  82269
  99903
  97079
  72708
  108177
  130830
  50393
  141354
  123264
  116302
  51119
  127287
  137515
  109285
  110750
  93770
  54926
  57131
  136897
  97693
  135531
  122858
  112089
  98599`;

const modules = list.split("\n");

// challenge 1
export const sum = (mods) =>
  mods.map((n) => Math.floor(n / 3) - 2).reduce((a, b) => a + b);
// console.log(sum);

// challenge 2
export function calculateModFuel(mod) {
  let remainder = mod;
  let bundle = [];

  while (remainder > 0) {
    remainder = Math.floor(remainder / 3) - 2;
    if (remainder > 0) {
      bundle.push(remainder);
    }
  }

  let total = bundle.reduce((a, b) => a + b);
  return total;
}

export function calculateTotalFuel(mods) {
  return mods.map((n) => calculateModFuel(n)).reduce((a, b) => a + b);
}

// console.log(calculateTotalFuel(modules));
