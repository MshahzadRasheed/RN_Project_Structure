import { NativeModules } from "react-native";

class DataHandler {
  store;
  recentlyLoggedIn = false;
  appLozic = NativeModules.ApplozicChat;

  setStore(store) {
    this.store = store;
  }

  setRecentlyLoggedIn(recentlyLoggedIn) {
    this.recentlyLoggedIn = recentlyLoggedIn;
  }

  getStore() {
    return this.store;
  }

  getRecentlyLoggedIn() {
    return this.recentlyLoggedIn;
  }

  loginOnApplozic({ name, id, details }) {
    const alUser = {
      userId: /* "29", //  */ id.toString(),
      password: "123456",
      authenticationTypeId: 1,
      applicationId: "28c72ffb2e78f227949b0c77107646138", // replace "applozic-sample-app" with App ID from Applozic Dashboard
      deviceApnsType: 0, // Set 0 for Development and 1 for Distribution (Release)
      displayName: name,
      contactNumber: details.phone
    };

    this.appLozic.login(alUser, (error, response) => {
      if (error) {
        // authentication failed callback
        console.log(error);
      } else {
        console.log(response);
      }
    });
  }

  getAppLozic() {
    return this.appLozic;
  }
}

export default new DataHandler();
