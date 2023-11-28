let nome = "odin"
let xp = 1000
let nivel
if (xp<1.000){	
    nivel="Ferro"
}else if (xp>1.000 || xp<=2.000){
	nivel="Bronze"
}else if (xp>2.000 || xp<=5.000){
	nivel="Prata"
}else if (xp>6.000 || xp<=7.000){
	nivel="Ouro"
}else if (xp>7.000 || xp<=8.000){
	nivel="Platina"
}else if (xp>8000 || xp<=9000){
	nivel="Ascendente"
}else if (xp>9000 || xp<=10000){
	nivel="Imortal"
}else if (xp>10000){
	nivel="Radiante"
}
console.log('O Herói de nome '+nome+'  está no nível de '+nivel)