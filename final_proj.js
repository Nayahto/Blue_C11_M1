/*obs, o status permanecera ao longo de todo o jogo*/
// instruções //
/*console.log(`o jogo vai funcionar da seguinte maneira: o jogador tera algumas tarefas para executar ao longo de 3 horas diarias.\n cada tarefa nao cumprida acarretará na perda de alguns pontos de vida e no aumento do estresse da sua mae `)
console.log(`voce acabou de acordar e ja sao 16 da tarde. vc tem mais 3 horas ate a hora da aula`)*/

// variaveis//
let jogador = 
{
  nivel_estresse: 0,
  vida: 100,
  nota: 0
}
let tempo = 
{
  horas: 16,
  dia: 0
}
  let taref1 = 0
  let taref2 = 0
  let taref3 = 0
  let taref4 = 0
// funcoes, lacos e condicionais //
function func_tarefas(a, b)
{
   if(a > 0 && a <= 4)
     {
console.log(b)
   }else if (a < 1 || a > 4 )
   {console.log(`voce não fez nada`)
   jogador.nivel_estresse += 20
   console.log(`seu estresse esta em: ${jogador.nivel_estresse}`)
   }else{}
}
function repete_tarefa (a)
{
  if(a == 1)
  {
    taref1 ++
  }
  
  if(a == 2)
  {
    taref2 ++
  }
  
  if(a == 3)
  {
    taref3 ++
  }
  
  if(a == 4)
  {
    taref4 ++
  }
  
  if(taref1 > 1 || taref2 > 1 || taref3 > 1 || taref4 > 1)
  {
    console.log(`essa tarefa ja foi feita`)
    jogador.nivel_estresse += 10
    console.log(`voce perdeu tempo fazendo algo que ja tinha feito antes seu estresse aumentou. estresse: ${jogador.nivel_estresse}`)
  }
}
function consequencias (a,b,c,d)
{
 if(a == 1 && b == 1 && c == 1) 
 {
   console.log(`todas as tarefas de casa foram feitas, mas voce nao conseguiu entregar as tarefas`)
 }
 if(d == 1 && b == 1 && c == 1) 
 {
   jogador.nivel_estresse += 60
   jogador.vida -= 40
   console.log(`a casa esta um brinco e voce ainda teve tempo de estudar. sua nota vai ser exelente! porem seu doginho nao comeu`)
   console.log(`nao alimentar o doginho é uma falta de atenção muito grande, por isso voce ficou tao estressado`)
 
   console.log(`estresse: ${jogador.nivel_estresse}\nvida: ${jogador.vida}`)
 }
   if(a == 1 && d == 1 && c == 1) 
 {
   console.log(`a casa ainda ficou um pouco bagunçada mas as tarefas mais importantes foram feitas. o doginho foi alimentado e voce ainda conseguiu estudar. parabéns!!`)
 }
 if(a == 1 && d == 1 && b == 1)
 {
   console.log(`voce se saiu bem. alimentou o doginho e conseguiu estudar. so nao entendi por que voce jogou o lixo sem ter limpado a casa`)
 }
 }

while(tempo.dia < 1 )
{
     let escolha = +prompt (`faça sua escolha de tarefa 1: alimenta o doginho. 2: limpa a casa . 3: coloca o lixo pra fora. 4: faz as tarefas escolares`)
     let tarefas = [undefined, `o doginho foi alimentado`, `a casa foi limpa`, `o lixo foi jogado`, `a tarefa escolar foi feita`]
     tarefas = tarefas[escolha]
     tempo.horas++
     console.log(`sao ${tempo.horas} horas`)
   func_tarefas(escolha, tarefas)
   repete_tarefa(escolha)
   consequencias(taref1, taref2, taref3, taref4)
  console.log(taref1)
  console.log(taref2)
  console.log(taref3)
  console.log(taref4)
     if(tempo.horas >= 19)
       {
         tempo.horas = tempo.horas - 3
         tempo.dia++
         console.log(`hoje é dia ${tempo.dia}`)
        taref1 = 0
        taref2 = 0
        taref3 = 0
        taref4 = 0
       }
}

// testes //