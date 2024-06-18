import { DioAccount } from "./DioAccount";

export class PeopleAccount extends DioAccount {
  private doc_id: number;

  constructor(name: string, doc_id: number, accountNumber: number) {
    super(name, accountNumber);
    this.doc_id = doc_id;
  }
}
