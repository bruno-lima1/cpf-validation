











































// export default class CpfValidation {
//   constructor(cpf) {
//     this.cpf = document.getElementById(cpf)
//     this.preventDefault = this.preventDefault.bind(this);
//     this.returnCpf = this.returnCpf.bind(this)
//   }
//   init() {
//     if (this.cpf) {
//       this.addEvent()
//       this.errorMessage()
//     }
//     return this;
//   }
//   addEvent() {
//     this.cpf.addEventListener("keydown", this.preventDefault);
//     this.cpf.addEventListener("change", this.returnCpf)
//   }
//   preventDefault(event) {
//     if (event.key === 'Enter') {
//       event.preventDefault()
//     }
//   }
//   clear(cpf) {
//     return cpf.replace(/\D/gi, "")
//   }
//   build(cpf) {
//     return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/gi, "$1.$2.$3-$4")
//   }
//   format(cpf) {
//     return this.build(this.clear(cpf))
//   }
//   validation() {
//     const matchCpf = this.cpf.value.match(/(\d{3}[.-]?){3}\d{2}/gi);
//     return matchCpf && matchCpf[0] === this.cpf.value
//   }
//   returnCpf() {
//     return this.validation()
//       ? (this.cpf.value = this.format(this.cpf.value), this.cpf.classList.add("valid"), this.cpf.classList.remove("error"), this.cpf.nextElementSibling.classList.remove("active"))
//       : (this.cpf.classList.add("error"), this.cpf.classList.remove("valid"), this.cpf.nextElementSibling.classList.add("active"))
//   }
//   errorMessage() {
//     const span = document.createElement("span");
//     span.classList.add("error-text");
//     span.innerHTML = "CPF inválido";
//     this.cpf.parentElement.insertBefore(span, this.cpf.nextElementSibling)
//   }
// }
