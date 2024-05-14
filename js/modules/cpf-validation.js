export default class CPFValidation {
  constructor(cpf) {
    this.cpf = document.getElementById(cpf)
    this.preventDefault = this.preventDefault.bind(this)
    this.enableValidation = this.enableValidation.bind(this)
  }
  init() {
    if (this.cpf) {
      this.addEvent()
      this.errorMessage()
    }
    return this;
  }
  addEvent() {
    this.cpf.addEventListener("keydown", this.preventDefault)
    this.cpf.addEventListener("change", this.enableValidation)
  }
  preventDefault(event) {
    if (event.key === "Enter") {
      event.preventDefault()
    }
  }
  enableValidation() {
    return this.validation()
    ? (this.cpf.value = this.build(this.clear(this.cpf.value)), this.cpf.classList.add("valid"), this.cpf.classList.remove("error"), this.cpf.nextElementSibling.classList.remove("active"))
    : (this.cpf.classList.add("error"), this.cpf.classList.remove("valid"), this.cpf.nextElementSibling.classList.add("active"))
  }
  validation() {
    const matchCPF = this.cpf.value.match(/(\d{3}[.-]?){3}\d{2}/gi)
    return matchCPF && matchCPF[0] === this.cpf.value
  }
  clear() {
    return this.cpf.value.replace(/\D/gi, "")
  }
  build() {
    return this.cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4")
  }
  errorMessage() {
    const span = document.createElement("span");
    span.classList.add("error-text")
    span.innerHTML = "CPF Inválido";
    this.cpf.parentElement.insertBefore(span, this.cpf.nextElementSibling)
  }
}
