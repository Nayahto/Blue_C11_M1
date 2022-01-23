/* instalar o "prompt-sync" para poder usar o prompt em outras máquinas*/
/* eu pensei em fazer uma historia que finalizasse caso o jogaddor desistisse em algum ponto mas como o codigo tem wue continuar de qualquer forma eu fui criando os finais caso as respostas fossem não*/

let cont_sim = 0;
alert(`Depois de uma árdua joranda com desafios variaveis e constantes nosso heroi o "javio scrick" se depara com o seu maior inimigo e que talvez ele nao tenha "condições" pata derrota-lo mas para descobrir qual sera o final dessa jornada acompanhe o javio e ajude-o a chegar no seu em seu objetivo final o grande Olímpio, o Olímpio "formacio-blue" na iha de web`)
let javio = prompt (`javio acaba de chegar em um novo nivel na sua jornada até o formacio-full deseja continuar ?`)
if (javio == "nao")
{
  alert(`javio jamais desistiria dos seus desafios\n mas se esse é seu desejo... vou te contar o\n que acontece com o javio nas profecias elficas.\n segundo as profecias javio termina sua vida se\n queixando de nunca ter conseguido chegar ao apice \n do seu poder e também de nunca ter chegado \n a ilha web e encontrado o tão sonhado Olímpio \n "formacio-full" e então ele morre com o coração \n amargurado. fim!`)
}
else if (javio == "sim")
{
  alert(`era isso que eu queria ouvir!`)
  cont_sim ++
} else {}
let javio1 = prompt(`seguindo em sua jornada javio se depara com um barco que te levará para im lugar jamais visto por um mortal. você aceita subir no barco ?`)
if (javio1 === "nao")
{
  alert("ce ta de brincadeira meu guerreiro")
  alert("tudo bem, apesar de nao ter conseguido derrotar o seu inimigo javio viu que era corajoso o bastante para chegar até aqui. fim!")
} else if (javio1 == "sim"){
  alert("esse é o espírito!")
  alert(`depois de subir no barco e passar por uma longa viagem, javio desembarca em uma floresta inóspita`)
  cont_sim++
}else{}
let javio2 = prompt("depois de entrar nessa floresta, javio vê algumas criaturas que parecem assustadoras. javio vasculha ou não os bichos assustadores ?")

if (javio2 == 'nao'){
  alert (`voce ja passou por muita coisa. te entendo!`)
  alert(` contudo, javio vê que eram apenas filhotinhos fofinhos. e decepcionado consigo mesmo, ele retorna de onde vira anteriormente porem, ao menos a sensação de que ele poderia continuar no futuro permanece`)
}else if (javio2 == `sim`)
{
  alert (`caro jogador, quero dizer que a sua coragem me encanta`)
  alert(`javio descobre que são apenas filhotes fofinhos e inclusive ele adota um dos bichinhos e nomeia-o como "pé-de-frango"
  e agora em sua jornada javio nao se sente tão sozinho.`)
  alert (`voce acaba de desbloquear o pé-de-frango. parabens!`)
  cont_sim ++
}else{}
let javio3 = prompt (`ainda mais fundo nessa floresta, javio ouve gritos! javio vsi atras do grito ou não?`)
if (javio3 == `nao`)
{
  alert (`javio da meia volta da floresta e retorna para sua casa mas pé-de-frango é corajoso demais para ficar com ele. e entao ali termina uma bela amizade`)
  alert (`com os olhos cheios de lágrimas, javio se despede de pé-de-frango`)
}else if (javio3 == `sim`)
{
  alert (`a jornada fica cada vez mais dificil mas continuar é o certo a se fazer`)
  alert (`chegando na origem dos gritos e ele descobre uma família de bruxos milenares que estavam testandos novos feitiços que eram fortes demais até mesmo para eles! e então eles dizem que apenas os mais fortes conseguem aprender esses feitiços. os feitiços são o "vetórium"  e o "functium"`)
  cont_sim ++
}
  else{}
 let javio4 = prompt (`javio finalmente descobriu o seu objetivo nessa aventura. e então jabio deve ou nao aprender os segredos do "vetorium" e do "functuim" sim ou não ?`)
if (javio4 == "nao"){
  alert (`voce estava quase no final da sua jornada`)
  alert (`javio viu que era capaz de conseguir mas preferou retornar para sua vida anterior onde tudo é mais tranquilo`)
}else if (javio4 == `sim`)
{
  alert (`javio consegue finalmente dominar os feitiços e se tornar um junior porém ele sabe que para ser realmante grande ele precisa aprender muito mais`)
  cont_sim ++
  }else{}
  if (cont_sim == 0 )
  {
  console.log(`javio falhou miseravelmente em sua missão`)
  }
  if (cont_sim == 1 || cont_sim == 2)
  {
    console.log(`javio falhou na missão mas ainda saiu vivo`)
  }
  if (cont_sim == 3)
  {
    console.log(`javio termina com 80% de progresso na sua jornada `)
  }
  if (cont_sim == 4)
  {
   console.log(`javio quase completou totalmente sua missão! 90% da missão foi completada`)
  }
  if (cont_sim == 5)
  {
    console.log(`parabens heroi! javio consegiu completar sua missão com louvor e agora pode finalmente terminar a primeira parte da sua jornada `)
  }