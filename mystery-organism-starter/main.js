// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//we'll need this later
function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}
//makes bacteria!
function pAequorFactory(num,arr) {
return {
  specimenNum: num,
  dna: arr,
  mutate: function () {
  
const i = Math.floor(Math.random()*this.dna.length);
 currentDNA=this.dna[i];
  do {
  this.dna[i] = returnRandBase();
}
while(this.dna[i] === currentDNA);
  },

compareDNA: function(neworganism){
const total = neworganism.dna.length;
let matches = 0;
  for (let i = 0; i<neworganism.dna.length; i++){
 
if (this.dna[i] === neworganism.dna[i]){
  matches++;
}
}
const common= Math.floor((matches/total)*100);
//console.log(`These organisms share ${common}% of their DNA.`)
return common;
},

willLikelySurvive: function(){
  const total = this.dna.length;
  let matches = 0;
  for (i in this.dna){
    
if (this.dna[i] === 'C' || this.dna[i] === 'G'){
  matches++;
}
  }
  if (Math.floor((matches/total)*100) > 60){
    return true;
  }
  else {return false;}
},
complementStrand: function(){
const complement = {'A':'T', 'T':'A','G':'C','C':'G'};
for (let i = 0; i<this.dna.length; i++)
{

 /* console.log(this.dna[i]);
  console.log("is the opposite of" + complement[this.dna[i]])*/
  this.dna[i] = complement[this.dna[i]];
}
return this.dna;
}

};
}

let strain1 = pAequorFactory(4,mockUpStrand());
let strain2 = pAequorFactory(2,mockUpStrand());
strain1.mutate();
strain1.compareDNA(strain2);
strain1.willLikelySurvive();
strain1.complementStrand();

let strainarray = [];
for (let i= 0; i<30;i++){
  strainarray.push(pAequorFactory(i,mockUpStrand()));
}

function compareallstrands(arr){
let similarstrands = {}
for (let i = 1; i< arr.length; i++){
  for (let j = 0; j<arr.length; j++){
    if (!(i === j)){
  key = `${i} and ${j}`;
  similarstrands[key] = arr[i].compareDNA(arr[j]);
}
}}
const mostsimilarstrandpct = Math.max.apply(Math, Object.values(similarstrands))
console.log(getKeyByValue(similarstrands,mostsimilarstrandpct) + " are the most similar bacteria, with " + mostsimilarstrandpct + " % of DNA in common");

}


compareallstrands(strainarray);