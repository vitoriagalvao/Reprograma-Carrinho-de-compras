console.log ('----------------------------------------------------------')
console.log ('              Projeto carrinho de compras')
console.log ('                   Vitória')
console.log ('----------------------------------------------------------')

const produtos = require ('./database.js');

//const{produtos} = db  
//console.table(produtos)

produtos.sort((a,b)=> a.preco - b.preco)
console.table(produtos)

const read = require('readline-sync')

const carrinho = []

const listarProdutos = read.question('Voce deseja encontrar o produto por categoria?(S/N) : ')
if(listarProdutos.toUpperCase() === 'S'){
    console.log('--------------------')
    console.log('Segue abaixo nossas categorias: ')
    console.log('Alimento, Bebida, Casa, Higiene, Informática')
    console.log('----------------------')

    const qualCategoria = read.question('Voce esta procurando produtos de qual categoria?')

    const categorias = produtos.filter(produtos => produtos.categoria === qualCategoria)
    console.table(categorias)
    } else {
        (listarProdutos.toUpperCase() !== 'S')
        console.log('Esses são nosso produtos disponiveis!')
        console.table(produtos)
    }
    console.log('----------------------------------------------------------------')

    const array = new Array()

    class Pedido{
        constructor(array){
            this.products = array
            this.subtotal = 0
            this.valortotal = 0
            this.totalItens = 0
        }
    }
    
        const comprar = () => {
          productId = parseInt(read.question('Digite o id do produto desejado: '))

           for(i = 0; i < 1000; i++){
              findId = produtos.find(item => item.id === productId)
               if(findId){
                   break
              }else {
                  productId = parseInt(read.question('Id não encontrado, tente novamente: '))
               }
          }
          
      }
      quantidadeItens = parseInt(read.question('Digite a quantidade de produtos que deseja comprar: '))
       for(i=0;i < 1000; i++){
           if(quantidadeItens > 0){
               break
           }else {
               quantidadeItens = parseInt(read.question('Digite uma quantidade valida: '))
           }
       }
          const produtosCarrinho = {...findId, quantidade:quantidadeItens}
          carrinho.push(produtosCarrinho)

          const continueComprando = (read.question('Deseja inserir mais algum item no carrinho? (Digite S ou N):'))
          const continueComprandoFormat = continueComprando.toLowerCase()

          if(continueComprandoFormat === 'n'){
              cupomCheck = (read.question('Voce possue um cupom de desconto: (S/N)').toLowerCase()); {
                  if(cupomCheck === 's'){
                      cupom = parseInt(read.question('Digite o valor do seu cupom de desconto: '))
                  }
              }
          } else{
              comprar()
          }
             for(i=0; i < 1000; i++){
                 if(cupom < 15 || cupom < 0){
                     cupom = parseInt(read.question('Desculpe, cupom inválido! Tente novamente'))
                 } else{
                     break
                 }
             }
        
               comprar()

               class Calcular{
                   constructor(carrinho){
                       this. novosProdutos = carrinho
                       this. subtotal = 0
                   }
                   calcularSubtotal(){
                       this.subtotal = this. novosProdutos.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade),0)
                   }
               }
               const calcular = new Calcular(carrinho)
               console.table(calcular.novosProdutos)

               //calculando subtotatl
               calcular.calcularSubtotal()
               console.log(`Valor do pedido é: ${calcular.subtotal.toFixed(2)}.`)

               //desconto
               const desconto = calcular.subtotal * (cupom/100)
               console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}.`)

               //calculando o total
               const total = calcular.subtotal - desconto
               console.log(`Valor totatl da compra: R$ ${total.toFixed(2)}.`)

               console.log('Obrigada por comprar conosco :')

              console.log('------------------------------------')

               const hoje = new Date()
               const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
               const dataHoje = hoje.toLocaleDateString('pt-BR', options)

               console.log(dataHoje)
               console.log('------------------------------------------------------------------------------')


