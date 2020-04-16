import {UserModel} from './models/User.model';

export class GetPagee {
  users: UserModel [];
  page: number;
  // tslint:disable-next-line:variable-name
  page_count: number;
}
