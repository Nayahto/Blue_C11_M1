/*obs, o status permanecera ao longo de todo o jogo*/
// instruções //
console.log(`o jogo vai funcionar da seguinte maneira: o jogador tera algumas tarefas para executar ao longo de 3 horas diarias.\n cada tarefa nao cumprida acarretará na perda de alguns pontos de vida e no aumento do estresse`)
console.log(``)
console.log(`suas escolhas sao: tarefa 1: alimentar o doginho tarefa 2: limpar a casa tarefa 3: jogar o lixo tarefa 4: fazer tarefas escolares`)
console.log(`voce acabou de acordar e ja sao 16 da tarde. vc tem mais 3 horas ate a hora da aula`)

// variaveis//
let jogador = 
{
  nivel_estresse: 0,
  vida: 100
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
function tarefas_nao_feitas(a, b)
{
   if(a > 0 && a <= 4)
     {
console.log(b)
   }else if (a < 1 || a > 4 )
   {console.log(`voce deixou de fazer uma tarefa`)
   if(jogador.nivel_estresse <= 80)
   {
   jogador.nivel_estresse += 20
   }
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
  if (taref1 > 1) 
  {
    if(jogador.nivel_estresse <= 98)
    {
      jogador.nivel_estresse += 2
    }
    console.log(`voce alimentou duas vezes o seu doginho. ele oode acabar engordando`)
  }
  if (taref2 > 1)
  {
    if(jogaddor.nivel_estresse < 94)
    {
      jogador.nivel_estresse += 6
    }
    console.log(`voce limpou a casa duas vezes parabéns pela higiene, mas voce ficou um pouco estressado pois poderia ter feito algo ainda mais produtivo`)
  }
  if (taref3 > 1)
  {
    if(taref2 < 1 && taref3 > 1)
    {
      if(jogador.nivel_estresse <= 90)
      {
        jogador.nivel_estresse +=10
      }
      console.log(`voce tentou jogar o lixo de novo e ainda nem limpou a casa`)
    }else
    {
      console.log(`voce jogou o lixo duas vezes `)
    }
    
  }
  if (taref4 > 1)
  {
    console.log(`essa tarefa ja foi feita`)
    if(jogador.nivel_estresse >= 5)
    {
      jogaddor.nivel_estresse -= 5
    }
    console.log(`porem estudar é sempre bom então voce ficou mais tranquilo`)
  }
}
function consequencias (a,b,c,d)
{
 if(a == 1 && b == 1 && c == 1) 
 {
   if(jogador.nivel_estresse <= 90)
   {
     jogador.nivel_estresse += 10
   }
   console.log(`todas as tarefas de casa foram feitas, mas voce nao conseguiu entregar as tarefas escolares. sua nota vai ser bem baixa esse semestre`)
 }
 if(d == 1 && b == 1 && c == 1) 
 {
   if(jogador.nivel_estresse <= 70)
   {
   jogador.nivel_estresse += 30
   }
   console.log(`a casa esta um brinco e voce ainda teve tempo de estudar. sua nota vai ser exelente! porem seu doginho nao comeu`)
   console.log(`nao alimentar o doginho é uma falta de atenção muito grande. por isso voce ficou tao estressado`)
 }
   if(a == 1 && d == 1 && c == 1) 
 {
   if(jogador.nivel_estresse >= 10)
   {
     jogador.nivel_estresse -= 10
   }
   console.log(`a casa ainda ficou um pouco bagunçada. mas as tarefas mais importantes foram feitas. o doginho foi alimentado e voce ainda conseguiu estudar. parabéns!!`)
 }
 if(a == 1 && d == 1 && b == 1)
 {
   if(jogador.nivel_estresse > 10)
   {
     jogador.nivel_estresse -=10
   }
   console.log(`voce se saiu bem. alimentou o doginho e conseguiu estudar. so nao entendi por que voce jogou o lixo sem ter limpado a casa`)
 }
 }

while(tempo.dia < 5 )
{
     let escolha = +prompt (`faça sua escolha`)
     let tarefas = [undefined, `o doginho foi alimentado`, `a casa foi limpa`, `o lixo foi jogado`, `a tarefa escolar foi feita`]
     tarefas = tarefas[escolha]
     tempo.horas++
     console.log(`sao ${tempo.horas} horas`)
   tarefas_nao_feitas(escolha, tarefas)
   repete_tarefa(escolha)
   consequencias(taref1, taref2, taref3, taref4)
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
       if(tempo.dia == 5)
       {
         if(jogador.nivel_estresse >= 20 && jogador.nivel_estresse <= 50)
         {
             jogador.vida -= jogador.nivel_estresse
           console.log(`sua semana foi um pouco dificil mas voce conseguiu se sair bem`)
           console.log(`status: \n vida: ${jogador.vida}\n estresse: ${jogador.nivel_estresse}`)}
           else if(jogador.nivel_estresse >= 51 && jogador.nivel_estresse <= 100){
             jogador.vida -= jogador.nivel_estresse
             console.log(`sua semana foi muito dificil meu guerreiro, entao descanse bastante para a proxima semana.`)
             console.log(`status: \n vida: ${jogador.vida}\n estresse: ${jogador.nivel_estresse}`)
           }else 
           {
             console.log(`seu estresse esta bem baixo pelo que eu vi voce esta se saindo bem`)
           }
         }
       }

// testes //