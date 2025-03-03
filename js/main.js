const buttons1=document.querySelectorAll(`.div-btn-btn`)
const blocks=document.querySelectorAll(`.box1_div_first_block`)

buttons1.forEach(btn=>{
    btn.addEventListener(`click`,(e)=>{
        let array=[...buttons1].indexOf(btn)
        if(document.querySelector(`.jsBlock`)){
            document.querySelector(`.jsBlock`).classList.remove(`jsBlock`)
            blocks[array].classList.add(`jsBlock`)
        }
        if(document.querySelector(`.jsRotet`))
        document.querySelector(`.jsRotet`).classList.remove(`jsRotet`)
        btn.classList.add(`jsRotet`)
      
    })
})






const bars=document.querySelector(`.f`)
const block=document.querySelector(`.block`)

bars.addEventListener(`click`,()=>{
    if(block.classList.contains(`blocked`)){
        block.classList.remove(`blocked`)
    }
    else{
        block.classList.add(`blocked`)
    }
})
const fds=document.querySelectorAll(`.fd`)
const blockedds=document.querySelectorAll(`.blockedd`)

fds.forEach(btn=>{
    btn.addEventListener(`click`,(e)=>{
        let array=[...fds].indexOf(btn)
        if(document.querySelector(`.show`)){
            document.querySelector(`.show`).classList.remove(`show`)
            blockedds[array].classList.add(`show`)
        }
        if(document.querySelector(`.jsRotet`))
        document.querySelector(`.jsRotet`).classList.remove(`jsRotet`)
        btn.classList.add(`jsRotet`)
      
    })
})

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1500: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        1990: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    navigation: {
        nextEl: ".swiper-button-prev1",
        prevEl: ".swiper-button-next1",
      },
      hashNavigation: {
        watchState: true,
      },
  });



  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination1",
      clickable: true,
    },
    loop:true,
    breakpoints: {
        300: {
          slidesPerView: 1.8,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1500: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        1880: {
          slidesPerView: 6,
          spaceBetween: 50,
        },
      },
    navigation: {
        nextEl: ".swiper-button-prev1",
        prevEl: ".swiper-button-next1",
      },
      hashNavigation: {
        watchState: true,
      },
  });





const opens=document.querySelectorAll(`.open`)
const uls=document.querySelectorAll(`.box9_1`)

opens.forEach(btn=>{
  btn.addEventListener(`click`,(e)=>{
      let array=[...opens].indexOf(btn)
      if(document.querySelector(`.display_blok`)){
          document.querySelector(`.display_blok`).classList.remove(`display_blok`)

          uls[array].classList.add(`display_blok`)
      }
      if(document.querySelector(`.jsRotet90`))
      document.querySelector(`.jsRotet90`).classList.remove(`jsRotet90`)

      btn.classList.add(`jsRotet90`)
    
  })
})


const barss = document.querySelector(`.barss`);
barss.addEventListener(`click`,()=>{
  block.classList.remove(`blocked`)
})
