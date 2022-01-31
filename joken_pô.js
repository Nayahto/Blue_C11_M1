// instalar o prompt-syn no node!!//

let cont = +prompt (`diga quantas rodadas voce quer jogar`)
let selec_item
let a = Math.floor(Math.random(0,3)*3);
let vet = [`pedra`, `papel`,`tesoura`]
let d = vet[a]
let comp = 0;
let play = 0;
let cons
let cons1
while(cont > 0)
{    console.log(`opcoes de escolha`)
      for (let i = 0; i < vet.length; i ++)
{
      console.log(vet[i])
}
      selec_item = prompt (`faca uma escolha entre pedra, papel ou tesoura`)
    if (d == `pedra` && selec_item == `pedra`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item}\n resultado: empate`)
    }
    if (d == `pedra` && selec_item == `papel`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item}\n resultado: voce venceu`)
          play ++
    }
    if (d == `pedra` && selec_item == `tesoura`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item}\nresultado: voce perdeu`)
          comp ++
    }
    if (d == `papel` && selec_item == `pedra`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item} \nresultado: voce perdeu`)
          comp ++
    }
    if (d == `papel` && selec_item == `papel`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item}\n resultado: empate`)
    }
    if (d == `papel` && selec_item == `tesoura`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item}\n resultado: voce venceu`)
          play ++
    }
    if (d == `tesoura` && selec_item == `pedra`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item} \nresultado: voce venceu`)
          play ++
    }
    if (d == `tesoura` && selec_item == `papel`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item}\n resultado: voce perdeu`)
          comp ++
    }
    if (d == `tesoura` && selec_item == `tesoura`){
          console.log(`seu oponente escolheu: ${d}\n você escolheu ${selec_item}\n resultado: voce empate`)
    }
    if (play > comp)
{
      console.log(`voce venceu ${play} rodadas \n seu oponente venceu ${comp} rodadas\n resultado: voce é o vencedor`)}else if (play < comp)
{
      console.log(`voce venceu ${play} rodadas\n seu oponente venceu ${comp} rodadas \n resultado: voce perdeu`)
}else if(comp == play)
{
      console.log(`empate`)
}else {}

cont --
if(cont < 1)
{
  cons = prompt(`deseja jogar novamente ?`)
  if (cons == `sim`){
      cons1 = +prompt(`diga quantas rodadas voce quer`)
      cont = cons1
  }else if (cons == `nao`)
  {
        console.log(`fim de jogo`)
  }else{}
      
}
}