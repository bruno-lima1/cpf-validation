export default class ValidarCpf {
  constructor(cpf) {
    this.cpf = document.getElementById(cpf);
    this.returnCPF = this.returnCPF.bind(this)
    this.preventDefault = this.preventDefault.bind(this)
  }
  init() {
    if (this.cpf) {
      this.addEvent();
      // this.addErrorSpan();
    }
    return this;
  }
  addEvent() {
    this.cpf.addEventListener("keydown", this.preventDefault)
    this.cpf.addEventListener("change", this.returnCPF)
  }
  clear() {
    return this.cpf.value.replace(/\D/gi, "");
  }
  build() {
    return this.cpf.value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4");
  }
  preventDefault(event) {
    if (event.key === "Enter") {
      event.preventDefault()
    }
  }
  returnCPF() {
    this.cpf.value = this.build(this.clear(this.cpf.value))
    // if (this.validation(cpf.value)) {
    //   cpf.value = this.build(this.clear(this.cpf.value));
    //   cpf.classList.add("valid");
    //   cpf.classList.remove("error");
    //   cpf.nextElementSibling.classList.remove("active");
    // } else {
    //   cpf.classList.add("error");
    //   cpf.classList.remove("valid");
    //   cpf.nextElementSibling.classList.add("active");
    // }
  }
  // validation(cpf) {
  //   const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/gi);
  //   return matchCpf && matchCpf[0] === cpf;
  // }
  // addErrorSpan() {
  //   const errorElement = document.createElement("span");
  //   errorElement.classList.add("error-text");
  //   errorElement.innerText = "CPF Inválido";
  //   this.cpf.parentElement.insertBefore(
  //     errorElement,
  //     this.cpf.nextElementSibling
  //   );
  // }
}
