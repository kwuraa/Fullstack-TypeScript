import { PeopleAccount } from "./class/PeopleAccount";
import { CompanyAccount } from "./class/CompanyAccount";

const peopleAccount: PeopleAccount = new PeopleAccount(
  "Camila",
  12312312309,
  213
);

console.log(peopleAccount);

peopleAccount.deposit();

const companyAccount: CompanyAccount = new CompanyAccount("Matheus", 123);
companyAccount.deposit();
