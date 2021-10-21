function MostrarCampoPesquisar(){
   let campo = document.querySelector("#campo")
   if(campo.style.display=="inline"){
       campo.style.display="none"
   }else{
       campo.style.display = "inline"}
   }
    
   //*Objeto//
       let projeto1={
           titulo:'Calculadora',
           descricao:'Projeto desenvolvido usando Javascript , HTML e css de uma calculadora de média simples.',
           foto: 'calculadora.png'
       }
       
       let projeto2={
        titulo:'Conversor',
        descricao:'Projeto desenvolvido usando Javascript , HTML e css de um Conversor de Dolar para Real.',
        foto: 'conversor.png'
       }

       let projeto3={
           titulo:'Mentalista',
           descricao:'Projeto desenvolvido usando Javascript , HTML e css de um jogo onde você tenta advinhar um numero que foi sorteado',
           foto:'mentalista.png'
       }

    let projetos = [projeto1,projeto2,projeto3]

       let ProjetoAtual = 0


       function ProximoProjeto(){
         
           if(ProjetoAtual<1){
           ProjetoAtual++}
          else{
              ProjetoAtual=0
          }
           

           titulo=document.querySelector(".titulo-projeto").innerHTML= projetos[ProjetoAtual].titulo

           descricao=document.querySelector(".texto-corpo")
           descricao.innerHTML=projetos[ProjetoAtual].descricao

           imagem = document.querySelector(".foto-perfil")
           imagem.src="imagens/"+projetos[ProjetoAtual].foto
       }

       