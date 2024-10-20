var splide = new Splide("#service-carousel", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  arrows: true,
  breakpoints: {
    768: {
      perPage: 1,
      autoplay: true, // Ativa o autoplay para telas menores que 768px (móveis)
    },
    1024: {
      perPage: 2,
      autoplay: true, // Ativa o autoplay para telas entre 768px e 1024px (tablets)
    },
  },
  autoplay: {
    delay: 100,
    pauseOnHover: false,
    pauseOnFocus: false,
  },
})

splide.mount()



//curso

var splide = new Splide("#cursos-carousel", {
  type: "loop",
  perPage: 3, // Número de slides por página em desktops
  perMove: 1,
  arrows: false,
  breakpoints: {
    768: {
      perPage: 1,
      autoplay: true, // Ativa o autoplay para telas menores que 768px (móveis)
    },
    1024: {
      perPage: 3,
      autoplay: true, // Ativa o autoplay para telas entre 768px e 1024px (tablets)
    },
  },
  autoplay: {
    delay: 100,
    pauseOnHover: false,
    pauseOnFocus: false,
  },
})

splide.mount()

// Reveal content on hover
document.querySelectorAll(".course-card").forEach((card) => {
  card.addEventListener("mouseover", function () {
    this.querySelector(".card-content").classList.remove("d-none")
  })

  card.addEventListener("mouseout", function () {
    this.querySelector(".card-content").classList.add("d-none")
  })
})

//patrocinio

const carousel = document.getElementById("carousel")
let scrollAmount = 0

function scrollCarousel() {
  scrollAmount += 1
  if (scrollAmount >= carousel.scrollWidth / 2) {
    carousel.appendChild(carousel.firstElementChild)
    scrollAmount = 0
  }
  carousel.style.transform = `translateX(-${scrollAmount}px)`
}

setInterval(scrollCarousel, 20) // Ajuste a velocidade da rolagem

//equipe
var splide = new Splide("#equipe-carousel", {
  type: "loop",
  perPage: 3, // Número de slides por página em desktops
  perMove: 1,
  arrows: true,
  breakpoints: {
    768: {
      perPage: 1,
      autoplay: true, // Ativa o autoplay para telas menores que 768px (móveis)
    },
    1024: {
      perPage: 3,
      autoplay: true, // Ativa o autoplay para telas entre 768px e 1024px (tablets)
    },
  },
  autoplay: {
    delay: 100,
    pauseOnHover: false,
    pauseOnFocus: false,
  },
})

splide.mount()

// Ajuda

function enviarTexto() {
  const inputTexto = document.querySelector("input").value
  alert("Você digitou: " + inputTexto)
}

//formulario validaçoa

;(() => {
  "use strict"

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation")

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add("was-validated")
      },
      false
    )
  })
})()

function sendWhatsAppMessage(button) {
  const card = button.closest(".card")
  const productName = card.querySelector(".card-title").textContent
  const productPrice = card.querySelector(".card-text.fs-2").textContent

  const message = `Quero comprar ${productName} por R$ ${productPrice}`
  const whatsappUrl = `https://wa.me/+558198244996?text=${encodeURIComponent(
    message
  )}`

  window.open(whatsappUrl, "_blank")
}

const youtubeLink = "https://www.youtube.com/watch?v=vWGXH77UlIc" // Replace VIDEO_ID with the actual Youtube video ID

const youtubeIcon = document.getElementById("YT")

youtubeIcon.addEventListener("click", (event) => {
  event.preventDefault() // Prevent default link behavior

  const modal = document.createElement("div")
  modal.classList.add("youtube-modal") // Add a class for styling
  modal.innerHTML = `
    <iframe width="853" height="480" src="${youtubeLink}" frameborder="0" allowfullscreen allow="autoplay"></iframe>
    <div class="modal-close">X</div>
  `

  document.body.appendChild(modal)

  const closeButton = document.querySelector(".modal-close")
  closeButton.addEventListener("click", () => {
    modal.remove()
  })

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.remove()
    }
  })
})
