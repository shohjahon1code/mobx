import { makeAutoObservable } from "mobx";

class UserStore {
  constructor() {
    makeAutoObservable(this);
  }
  isAuthenticated = false;
  username = "";

  login = (username: string, password: string): void => {
    this.isAuthenticated = true;
    this.username = username;
  };

  signup = (username: string, password: string, email: string): void => {
    this.isAuthenticated = true;
    this.username = username;
  };

  logout = (): void => {
    this.isAuthenticated = false;
    this.username = "";
  };
}

const userStore = new UserStore();

export default userStore;
