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
    console.log(this.dna[i]);
if (this.dna[i] === neworganism.dna[i]){
  matches++;
}
}
const common= Math.floor((matches/total)*100);
console.log(`These organisms share ${common}% of their DNA.`)

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
}

};
}

let strain1 = pAequorFactory(4,mockUpStrand());
let strain2 = pAequorFactory(2,mockUpStrand());
strain1.mutate();
strain1.compareDNA(strain2);
console.log(strain1.willLikelySurvive());

let strainarray = [];
for (let i= 0; i<30;i++){
  strainarray.push(pAequorFactory(i,mockUpStrand()));
}