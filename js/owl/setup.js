$('.owl-carousel').owlCarousel({
    loop:true, /*true (nao trava a troca de imagens na ultima) or false*/ 
    margin:10, /*margem entre as imagens*/
    nav:true, /* or false | menu de navegacao abaixo*/
    responsive:{ /* depende do tipo de tela que estará acessando */
        0:{
            items:1
        },
        600:{ /* com 600px de tela, vai mostrar 3 items por vez */
            items:3
        },
        1000:{ /* com 1000px de tela, vai mostrar 5 items por vez */
            items:5
        }
    }
})