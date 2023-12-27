function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //Novo texto alternativo do alt na imgem-light
  const novoAlt =
    "A imagem contem uma foto de um homem em frente ao mar vestido com a camisa do botafogo"

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    novoAlt.setAttribute("alt", novoAlt)
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // Toda essa function pode ser substuida por um toggle, ele  já e programado para realizar essa verificação de verdade e falso.
  // Só e preciso passar qual elemento ele precisa verificar.
}