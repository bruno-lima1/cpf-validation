export default class ValidarCpf {
  constructor(element) {
    this.element = element;
  }
  clear(cpf) {
    return cpf.replace(/\D/g, "");
  }
  build(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  }
  format(cpf) {
    const clear = this.clear(cpf);
    return this.build(clear);
  }
  validar(cpf) {
    const matchCpf = cpf.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);
    return matchCpf && matchCpf[0] === cpf;
  }
  returnCPF(cpf) {
    if (this.validar(cpf.value)) {
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
    this.addEvent();
    this.addErrorSpan();
    return this;
  }
}