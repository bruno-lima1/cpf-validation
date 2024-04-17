export default class ValidarCpf {
  constructor(element) {
    this.element = document.getElementById(element);
    console.log(this.element);
  }
  clear(cpf) {
    return cpf.replace(/\D/gi, "");
  }
  build(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4");
  }
  format(cpf) {
    return this.build(this.clear(cpf));
  }
  validation(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/gi);
    return matchCpf && matchCpf[0] === cpf;
  }
  returnCPF(cpf) {
    if (this.validation(cpf.value)) {
      cpf.value = this.format(cpf.value);
      cpf.classList.add("valid");
      cpf.classList.remove("error");
      cpf.nextElementSibling.classList.remove("active");
    } else {
      cpf.classList.add("error");
      cpf.classList.remove("valid");
      cpf.nextElementSibling.classList.add("active");
    }
  }
  addEvent() {
    this.element.addEventListener("change", () => {
      return this.returnCPF(this.element);
    });
    this.element.addEventListener("keydown", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
      }
    });
  }
  addErrorSpan() {
    const errorElement = document.createElement("span");
    errorElement.classList.add("error-text");
    errorElement.innerText = "CPF Inválido";
    this.element.parentElement.insertBefore(
      errorElement,
      this.element.nextElementSibling
    );
  }
  init() {
    if (this.element) {
      this.addEvent();
      this.addErrorSpan();
    }
    return this;
  }
}
