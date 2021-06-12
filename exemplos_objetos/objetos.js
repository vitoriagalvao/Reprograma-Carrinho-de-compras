const aluna = {
    nome: 'Vitória',
    local: 'São Paulo',
    Idade: 22,
    preferenciaFilme: ['ação','comédia','aventura'],
    estuda: function() {
        for (let i = 1; i<=10; i++){
            console.log('estuda javascript e tá arrasando' + i)
           
        }
        
    }
}
console.log(aluna.nome)
console.log(aluna.local); 
console.log('----------------------------------------------------------------------------')

const hoje = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataHoje = hoje.toLocaleDateString('pt-BR', options)

console.log(dataHoje)
console.log('------------------------------------------------------------------------------')

//trabalhando com arrays



