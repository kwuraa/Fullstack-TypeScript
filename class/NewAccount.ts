import { DioAccount } from "./DioAccount";

export class NewAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit = (deposit: number): void => {
    let balance = this.getBalance();
    balance += deposit + 10;
    console.log(
      "Seu saldo atual é R$ " +
        this.getBalance() +
        " Foi depositado R$ " +
        deposit +
        "\nSua conta agora possui R$ " +
        balance +
        " de saldo"
    );
  };
}
