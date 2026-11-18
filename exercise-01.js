// Leia o valor da conta, o número de pessoas e se vai ter os 10% de serviço (s ou n). Exiba quanto cada pessoa paga.
let conta = Number(prompt('Qual o valor da conta: '))
let pessoas = Number(prompt('Qual a quantidade de pessoas'))
let cont = 'a'
let comtaxa = (conta * 1.1 / pessoas).toFixed(2)
let semtaxa = (conta / pessoas).toFixed(2)



while(cont === 'a') {
    let taxa = prompt('Tem taxa de serviço? (s) caso tenha, (n) caso não tenha')
    if (taxa != 's' && taxa != 'n' ) {
        console.log('Digite (s) caso tenha, (n) caso não tenha')
    } else if(taxa === 's'){
        cont = 's'
        break
    }else if (taxa === 'n'){
        cont = 'n'
        break
    }
}

if (cont === 's') {
    alert(`Cada pessoa deve pagar: R$${comtaxa}`)
    
}else if(cont === 'n'){
    alert(`Cada pessoa deve pagar: R$${semtaxa}`)
}