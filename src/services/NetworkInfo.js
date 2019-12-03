import { NetInfo } from "react-native";

class NetworkInfo {
  networkInfoListener(dispatch, networkInfoAction) {
    NetInfo.isConnected.fetch().then(isNetworkConnected => {
      dispatch(networkInfoAction(isNetworkConnected));
    });

    NetInfo.isConnected.addEventListener(
      "connectionChange",
      isNetworkConnected => {
        dispatch(networkInfoAction(isNetworkConnected));
      }
    );
  }

  removeNetworkInfoListener(dispatch, networkInfoAction) {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      isNetworkConnected => {
        dispatch(networkInfoAction(isNetworkConnected));
      }
    );
  }
}

export default new NetworkInfo();
