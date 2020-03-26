import {Authentication} from './Authentication';

export class UserModel {
  constructor(public id: number, public username: string, public email: string) {
  }
}
