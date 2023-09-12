/* 

Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.

Bonus: 

1- al click su una thumb, visualizzare in grande l'immagine corrispondente 

2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente 

3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

Consigli del giorno:
regola d'oro: riciclare ovunque possibile! Questo significa che per la parte di markup possiamo recuperare html e css dell'esercizio svolto qualche giorno fa: è già tutto pronto!
il riciclo spesso va a braccetto con le funzioni! Sapendole sfruttare bene, l'esercizio si riduce a poche righe ;)


*/
const { createApp } = Vue

createApp({
  data(){
    return {  
        activeSlide: 0 ,
        slides:[
            {
            img: './assets/img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            },

            {
            img: './assets/img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            },
            
            {
            img: './assets/img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            },
            
            {
            img: './assets/img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            },
            
            {
            img: './assets/img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
            
        ]    
    }
  },
methods:{
    prev(){
        this.activeSlide--;
  
        if (this.activeSlide < 0) {
            this.activeSlide = this.slides.length - 1
        }
    },
    next(){
        //console.log(this.slides.length);
  
        this.activeSlide++;

        if(this.activeSlide > this.slides.length - 1) {
            this.activeSlide = 0
        }
    }
}
}).mount('#app')
