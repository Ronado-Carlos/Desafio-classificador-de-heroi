
let nome = "SONIC "
let xp = 10001

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
// XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 5.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante


if(xp <= 1000){
console.log("O Herói de nome " + nome + "está no nível de FERRO " )
}else if(xp > 1000 &&  xp <= 2000 ){
console.log("O Herói de nome " + nome + "está no nível de BRONZE " )
}else if(xp > 2000 && xp <= 5000 ){
console.log("O Herói de nome " + nome + "está no nível de PRATA " )
}else if(xp > 5000 && xp <= 7000 ){
console.log("O Herói de nome " + nome + "está no nível de OURO " )
}else if(xp > 7000 && xp < 8000){
console.log("O Herói de nome " + nome + "está no nível de PLATINA ")
}else if(xp > 8000 && xp < 9000){
console.log("O Herói de nome " + nome + "está no nível de ASCENDENTE ")
}else if(xp > 9000 && xp <= 10000){
console.log("O Herói de nome " + nome + "está no nível de IMORTAL ")   
}else if(xp >= 10000){
console.log("O Herói de nome " + nome + "está no nível de RADIANTE ")
}