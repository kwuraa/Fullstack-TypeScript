class Account {
  name: string;
  accountNumber: number;
  balance = 0;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  deposit = () => {
    console.log("você depositou!!");
  };

  withdraw = () => {
    console.log("você sacou!!");
  };

  getValue = () => {
    console.log(this.balance);
  };
}

class peopleAccount extends Account {
  doc_id: number;

  constructor(name: string, doc_id: number, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}

const adminAccount: Account = new Account("Matheus", 87654321);
console.log(adminAccount);

const account: Account = new Account("Camila", 12345678);
console.log(account);
