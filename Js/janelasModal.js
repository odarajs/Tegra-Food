 //carinho
 const botao = document.querySelector('#shoppingCart')
 const botao2 = document.querySelector('#btnIrAoCarrinho')
 //aparecerfiltro
 const testebtclick = document.querySelector('#filter')
 const opcaotroca = document.querySelector('#filterOptions')
 //carrinho
 const poupap = document.querySelector('.poupap-wraper')
 //fecha o filtro
 const fechar = document.querySelector('.janela-content')
 //notificacao compra
 const botaocompra = document.querySelector('.botaoComprar')
 const aparecernotif = document.querySelector('.animarNotif')
 const msg = "Item adicionado ao carrinho"
 const msgirparacarrinho = "Ir para o carrinho"
 //notificacao organizar a-z
 const botaoaz = document.querySelector('#sortByAlpha')
 const aparecerbarraorganizar = document.querySelector('.animarNotif')
 const organizartexto = "Ítens organizados de A à Z"
 const msgtextocancelar = "Cancelar"
 // dentro do carrinho de compra
 const botaocumpomadd = document.querySelector('#btnAddCupom')
 const aparecernotific = document.querySelector('#notifCont')
 const msgdizendonaopossivel = '<p class="codinvalido">codigo Invalido</p'
 //botao escolher mais
 const atualizar = document.querySelector('#btnEscolherMais')
 botao.addEventListener('click', () =>{
     poupap.style.display = 'block'
 })
 botao2.addEventListener('click', () =>{
     poupap.style.display = 'block'
 })
 testebtclick.addEventListener('click', () =>{
     opcaotroca.style.display = 'flex'
 })
 fechar.addEventListener('click', () => {
     opcaotroca.style.display = 'none'
 })
 //funcao acionar notificacao
 
 function ativar(msg) {
     aparecernotif.style.display = 'block'
     const mensagem = document.querySelector('.notifText')
     const msgirparacarrinho2 = document.querySelector('#btnIrAoCarrinho')
     mensagem.innerHTML = `${msg}`
     msgirparacarrinho2.innerHTML = `${msgirparacarrinho}`
 }
 botaocompra.addEventListener('click', () =>{
     ativar(msg)
     setTimeout(() => {
     aparecernotif.style.display='none';
 },3000);
 })
 function azativar(msgtextocancelar) {
     aparecerbarraorganizar.style.display = 'block'
     const mensagem = document.querySelector('.notifText')
     const cancelar = document.querySelector('.notifText2')
     mensagem.innerHTML = `${organizartexto}`
     cancelar.innerHTML = `${msgtextocancelar}`
 }
 botaoaz.addEventListener('click', () =>{
     azativar(msgtextocancelar)
     setTimeout(() => {
      aparecerbarraorganizar.style.display='none';
 },1000);
 })
 botaocumpomadd.addEventListener('click', () =>{
     aparecernotific.style.display = 'block'
     const mensagem2 = document.querySelector('#notMessage')
     mensagem2.innerHTML = `${msgdizendonaopossivel}`
     setTimeout(() => {
      aparecernotific.style.display='none';
 },2000);
 })
 atualizar.addEventListener('click', () =>{
     location.reload();
 })