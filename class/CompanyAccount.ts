import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (loan: number): void => {
    if (this.validateStatus()) {
      let balance = this.getBalance();
      balance += loan;
      console.log(
        "Você realizou um emprestimo de R$ " +
          loan +
          "\nE agora seu saldo atual é de R$ " +
          balance
      );
    } else {
      console.log("Você não tem permissão para realizar emprestimos");
    }
  };
}
