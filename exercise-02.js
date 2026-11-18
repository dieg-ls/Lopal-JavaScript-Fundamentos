let saldo = Number(prompt("Digite o saldo do cartão: "))
let viagem = Math.floor((saldo / 5))
let sobra = saldo %5
alert(`Voce consegue fazer ${viagem} viagens, e sobra ${sobra} reais`)