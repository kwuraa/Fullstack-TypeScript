export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): void => {
    console.log("\n" + this.name + "\n");
  };

  deposit = (deposit: number): void => {
    if (this.validateStatus()) {
      this.balance += deposit;
      console.log("Seu saldo atual é de R$ " + this.balance);
    }
  };

  withdraw = (withdraw: number): void => {
    if (this.validateStatus() && this.balance > withdraw) {
      this.balance -= withdraw;
      console.log(
        "Você sacou o valor de R$ " +
          withdraw +
          "\nAgora seu saldo é de R$ " +
          this.balance
      );
    } else if (!this.validateStatus()) {
      console.log("Sua conta esta invalida");
    } else {
      console.log("Você não tem saldo suficiente");
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error("Conta invalida!!!");
  };
}
