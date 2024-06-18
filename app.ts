import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";
import { NewAccount } from "./class/NewAccount";

//  Alterar o valor confome o depósito
const peopleAccount: PeopleAccount = new PeopleAccount(
  "Matheus Kawamura",
  1,
  1234
);

peopleAccount.getName();
peopleAccount.deposit(50);
peopleAccount.deposit(500);

//  Somente contas Válidas e com saldo suficiente, podem efetuar o saque com sucesso
peopleAccount.withdraw(50);
peopleAccount.withdraw(200);

// Acrescente o valor do empréstimo ao saldo atual
const companyAccount: CompanyAccount = new CompanyAccount("Camila Vitória", 28);

companyAccount.getName();
companyAccount.deposit(100);
companyAccount.getLoan(1234);

// Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito
const newAccount: NewAccount = new NewAccount("Gustavo Morais", 18192);

newAccount.getName();
newAccount.deposit(1000);
