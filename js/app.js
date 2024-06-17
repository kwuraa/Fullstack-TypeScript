"use strict";
// Define a classe User
class User {
  // Construtor da classe que inicializa os atributos
  constructor(name, age) {
    // Método showname que imprime o valor do atributo name no console
    this.showName = () => {
      console.log(this.name);
    };
    // Inicializa os atributos name e age com os valores passados como parâmetros
    (this.name = name), (this.age = age);
  }
}
// Cria uma instância da classe User com os valores "Kawamura" e 21
const user = new User("Kawamura", 21);
// Chama o método showname da instância user
user.showName();
