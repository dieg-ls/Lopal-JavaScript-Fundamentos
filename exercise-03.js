let gb = Number(prompt("Digite o tamanho do arquivo em GB: "))
let convert = gb * 8192
let vel = Number(prompt("Digite a velocidade da internet Mbps: "))
let cont = Math.floor(convert / vel)
let min = Math.floor(cont / 60)
alert(`A velocidade é${cont} segundos ou ${min} minutos`)

