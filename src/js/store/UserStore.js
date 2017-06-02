import { computed, observable } from "mobx";

export class UserStore {
  @observable users = []

  constructor() {
      this.refresh;
  }

  refresh() {
    const self = this;
    // @TODO: replace with real (or maybe even dynamic) URL
    return fetch("http://localhost:3000/api/users")
      .then((resp) => resp.json())
      .then(function(data) {
        console.log("request data ::: ", data);

        self.users = data;
      })
      .catch(function(error) {
        console.log("Error ::: ", error);
      });
  }
}

export default new UserStore;

