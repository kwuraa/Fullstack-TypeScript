export abstract class DioAccount {
  private name: string;
  accountNumber: number;
  balance = 0;
  status: boolean = false;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log("Nome alterado com sucesso!");
  };

  getName = (): string => {
    return this.name;
  };

  deposit = (): void => {
    if (this.validadeStatus()) {
      console.log("Depósito realizado com sucesso!");
    }
  };

  withdraw = (): void => {
    console.log("você sacou!!");
  };

  getBalance = (): void => {
    console.log(this.balance);
  };

  private validadeStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta invalida!!!");
  };
}
