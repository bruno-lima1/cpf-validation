export default class CpfValidation {
  constructor(cpf) {
    this.cpf = document.getElementById(cpf);
    this.returnCPF = this.returnCPF.bind(this)
    this.preventDefault = this.preventDefault.bind(this)
  }
  init() {
    if (this.cpf) {
      this.addEvent();
      this.addErrorSpan();
    }
    return this;
  }
  addEvent() {
    this.cpf.addEventListener("keydown", this.preventDefault)
    this.cpf.addEventListener("change", this.returnCPF)
  }
  preventDefault(event) {
    if (event.key === "Enter") {
      event.preventDefault()
    }
  }
  clear() {
    return this.cpf.value.replace(/\D/gi, "");
  }
  build() {
    return this.cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4");
  }
  returnCPF() {
    this.cpf.value = this.build(this.clear(this.cpf.value))
    if (this.validation()) {
      this.cpf.value = this.build(this.clear(this.cpf.value));
      this.cpf.classList.add("valid");
      this.cpf.classList.remove("error");
      this.cpf.nextElementSibling.classList.remove("active");
    } else {
      this.cpf.classList.add("error");
      this.cpf.classList.remove("valid");
      this.cpf.nextElementSibling.classList.add("active");
    }
  }
  validation() {
    const matchCpf = this.cpf.value.match(/(?:\d{3}[-.\s]?){3}\d{2}/gi);
    return matchCpf && matchCpf[0] === this.cpf.value;
  }
  addErrorSpan() {
    const errorElement = document.createElement("span");
    errorElement.classList.add("error-text");
    errorElement.innerText = "CPF Inválido";
    this.cpf.parentElement.insertBefore(errorElement,
      this.cpf.nextElementSibling
    );
  }
}
