import { RESTDataSource } from 'apollo-datasource-rest';
import { GetUserModel } from '../models/user.model';

class RandomUser extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://randomuser.me/api';
  }

  public getUser = async (gender = 'all'): Promise<GetUserModel> => {
    const user = await this.get(`/?gender=${gender}`);

    return user.results[0];
  };

  public async getUsers(people = 10, gender = 'all'): Promise<GetUserModel[]> {
    const user = await this.get(`/?results=${people}&gender=${gender}`);
    console.log(user);

    return user.results;
  }
}

export default RandomUser;
