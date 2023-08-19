const ftoc = function(cel) {

  let far =  (cel-32) * (5/9) ;
  return Math.round(far * 10) / 10;

};

const ctof = function(far2) {
  let cel2 = far2 * (9/5) + 32;
  return Math.round(cel2 * 10) / 10;

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
