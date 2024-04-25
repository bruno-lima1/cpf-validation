export default class ValidarCpf {
  constructor(cpf) {
    this.cpf = document.getElementById(cpf);
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
  init() {
    if (this.cpf) {
      this.addEvent();
      this.addErrorSpan();
      // console.log(this.clear(this.cpf))
    }
    return this;
  }
  addEvent() {
    this.cpf.addEventListener("change", () => {
      return this.returnCPF(this.cpf);
    });
    this.cpf.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
      }
    });
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
  addErrorSpan() {
    const errorElement = document.createElement("span");
    errorElement.classList.add("error-text");
    errorElement.innerText = "CPF Inválido";
    this.cpf.parentElement.insertBefore(
      errorElement,
      this.cpf.nextElementSibling
    );
  }
}
