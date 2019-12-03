// @flow
import ImagePicker from "react-native-image-picker";
import OpenSettings from "react-native-open-settings";
import { Alert } from "react-native";
import { IMAGE_QUALITY, IMAGE_MAX_WIDTH, IMAGE_MAX_HEIGHT } from "../constants";
import Util from "../util";

const IMAGE_PICKER_OPTIONS = {
  quality: IMAGE_QUALITY,
  maxWidth: IMAGE_MAX_WIDTH,
  maxHeight: IMAGE_MAX_HEIGHT,
  title: "Select Image",
  cancelButtonTitle: "cancel",
  takePhotoButtonTitle: "Camera",
  allowsEditing: true,
  chooseFromLibraryButtonTitle: "Gallery",
  mediaType: "photo",
  permissionDenied: {
    title: "Permission Denied"
  }
};

const LOG = __DEV__ && false;

class MediaPicker {
  showImagePicker(cb, options = IMAGE_PICKER_OPTIONS) {
    this.openShowImagePicker(options, cb);
  }

  pickImageFromCamera(options, cb) {
    ImagePicker.launchCamera(options, response => {
      if (LOG) {
        console.log("ImagePicker.launchCamera", response);
      }

      if (!response.didCancel && !response.error) {
        if (cb) {
          this.resizeImage(response.uri, cb);
        }
      }
    });
  }

  openShowImagePicker(cb, options = IMAGE_PICKER_OPTIONS) {
    ImagePicker.showImagePicker(options, response => {
      if (response.uri && cb) {
        cb(Util.isPlatformAndroid() ? "file://" + response.path : response.uri);
      }
      if (response.error) {
        this.openSettingModal();
      }
    });
  }

  openShowVideoPicker(options, cb) {
    ImagePicker.showImagePicker(options, response => {
      console.log("openShowVideoPicker", response);
      if (response.uri && cb) {
        cb(Util.isPlatformAndroid() ? "file://" + response.path : response.uri);
      }
      if (response.error) {
        this.openSettingModal();
      }
    });
  }

  openSettingModal() {
    Alert.alert(
      "Permission required",
      "Need permissions to access gallery and camera",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Open Settings",
          onPress: () => OpenSettings.openSettings()
        }
      ],
      { cancelable: false }
    );
  }
}

export default new MediaPicker();
