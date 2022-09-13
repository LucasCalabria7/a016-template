const filmes = [
  {
    titulo: 'O Auto da Compadecida',
    ano: 2000,
    diretor: 'Guel Arraes',
    elenco: [
      'Selton Mello',
      'Mateus Nachtergaele',
      'Marco Nanini',
      'Fernanda Montenegro',
    ],
  },
  {
    titulo: 'Carandiru',
    ano: 2001,
    diretor: 'Hector Babenco',
    elenco: [
      'Wagner Moura',
      'José Carlos Vasconcelos',
      'Ailton Graça',
      'Caio Blat',
    ],
  },
  {
    titulo: 'Aquarius',
    ano: 2012,
    diretor: 'Kléber Mendonça Filho',
    elenco: [
      'Sônia Braga',
      'Humberto Carrão',
      'Maeve Jinkings',
      'Bárbara Colen',
    ],
  },
]

// escreva seu código abaixo 👇🏻

const resultadosMegaSena = [
  [6, 10, 23, 89, 12, 34], //0
  [81, 12, 32, 65, 86, 4], //1
  [10, 54, 8, 12, 58, 23], //2
  [9, 3, 6, 10, 40, 50]    //3
]

for(let i = 0; i < resultadosMegaSena.length; i++) {
  console.log(i)
  console.log(resultadosMegaSena[i])
  if(resultadosMegaSena[i].length !== 6){
    alert(`Número de bolinhas sorteadas ! ${resultadosMegaSena[i].length}, bolinhas.`)
  }
};

for(let i = 0; i <resultadosMegaSena.length; i++ ){
  console.log(`Sorteio ${i+1}: ${resultadosMegaSena[i]}`)
};

console.log("---------------");

for(i in resultadosMegaSena) {
  console.log(i)
}

for(i of resultadosMegaSena){
  console.log(i)
}

console.log("---------------");

for (let i in resultadosMegaSena){
  console.log(`Sorteio ${Number(i)+1}:`)
  for(let numero of resultadosMegaSena[i]){
    console.log(numero)
  }
}

/* EXERCÍCIO DOS FILMES */

/*
laço pra cada filme {
  console.log('titulo, ano, diretor')
  console.log("estrelando: ")
  laço no elenco{
    cada pessoa no elenco*/

for(let i in filmes){
  console.log(`${filmes[i].titulo}, de ${filmes[i].ano}, dirigido por ${filmes[i].diretor}.`)
  console.log(`Estrelando: `)
  for(let atores of filmes[i].elenco){
    console.log(`${atores}`)
  }
};

