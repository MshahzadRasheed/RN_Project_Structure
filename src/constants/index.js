import moment from "moment";
import Util from "../util";
import { Images } from "../theme";

export const PASSWORD_MIN_LENGTH = 6;
export const PASSWORD_MAX_LENGTH = 20;
// export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;
export const APP_URL = "";
export const APP_DOMAIN = "";
export const QUERY_LIMIT = 10;
export const SAGA_ALERT_TIMEOUT = 500;
export const POST_VIEW_TIMEOUT = 2000;
export const IMAGE_QUALITY = 1;
export const IMAGE_MAX_WIDTH = 720;
export const IMAGE_MAX_HEIGHT = 480;
export const IMAGE_COMPRESS_MAX_WIDTH = 720;
export const IMAGE_COMPRESS_MAX_HEIGHT = 480;
export const VERSES_OF_THE_DAY_LIMIT = 10;
export const IMAGE_COMPRESS_FORMAT = "JPEG";
export const ANDROID_NOTI_CHANNEL = "VeteranAppChanel";

// date time formats
export const DATE_FORMAT1 = "dddd, DD MMMM, YYYY";
export const DATE_FORMAT2 = "DD MMM YYYY";
export const DATE_FORMAT3 = "YYYY-MM-DD";
export const TIME_FORMAT1 = "hh:mm A";
export const TIME_FORMAT2 = "HH:mm ";

export const DATE_FORMAT_TIME1 = "Do | MMM | HH";
export const DATE_FORMAT4 = "dddd, DD MMMM YYYY";
export const DATE_FORMAT5 = "MMM DD, YYYY";

// Messages

export const LOCATION_PERMISSION_DENIED_ERROR2 =
  "Location permission required, please go to app settings to allow access";
export const INVALID_NAME_ERROR = "Invalid name";
export const INVALID_EMAIL_ERROR = "Invalid email";
export const INVALID_PASSWORD_ERROR = `Invalid password, at least ${PASSWORD_MIN_LENGTH} characters`;
export const INTERNET_ERROR = "Please connect to the working internet";
export const ARE_U_SURE = "Are you sure?";
export const WELCOME_NOTE = "Welcome to the Veteran App!";
export const PROFILE_UPDATE_SUCCESS = "Profile successfully updated!";
export const SESSION_EXPIRED_ERROR = "Session expired, Please login again";

// Message types
export const MESSAGE_TYPES = {
  INFO: "info",
  ERROR: "error",
  SUCCESS: "success"
};

// File Types
export const FILE_TYPES = { VIDEO: "video", IMAGE: "image", AUDIO: "audi" };

// User Types
export const USER_TYPES = [
  {
    value: "Veteran",
    label: "Veteran"
  },
  {
    value: "Service Provider",
    label: "serviceProvider"
  }
];

// Delta location

export const DELTA_LOCATION = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export const GENDER_TYPES = [
  {
    value: "Male",
    label: "Male"
  },
  {
    value: "Female",
    label: "Female"
  }
];

export const BRANCH_TYPE = [
  {
    value: "dummy",
    label: "dummy"
  },
  {
    value: "sample",
    label: "sample"
  }
];

export const HOUSING_TYPE = [
  {
    value: "rent",
    label: "rent"
  },
  {
    value: "own",
    label: "own"
  }
];
export const SALARY_TYPE = [
  {
    value: "monthly",
    label: "monthly"
  },
  {
    value: "Yearly",
    label: "Yearly"
  }
];
export const SHIRT_SIZES = [
  {
    value: "small",
    label: "Small"
  },
  {
    value: "Medium",
    label: "Medium"
  },
  {
    value: "Large",
    label: "Large"
  },
  {
    value: "XLarge",
    label: "XLarge"
  }
];

export const SHOE_SIZES = [
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  },
  {
    value: "7",
    label: "7"
  },
  {
    value: "8",
    label: "8"
  }
];
export const MONTHS = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  }
];
export const VETERANS = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  }
];
// DUMMY Data

export const EVENTS_LIST = [
  {
    id: 1,
    image: "https://i.imgur.com/bD7iNXX.jpg",
    eventTitle: "Dummy Event Title",
    eventDate: "fri,18jan",
    eventTime: "04:30 pm utc",
    eventCity: "Dallas TX",
    Distance: 15
  },
  {
    id: 2,
    image: "https://i.imgur.com/65YQcT6.png",
    eventTitle: "Dummy Event Title",
    eventDate: "fri,18jan",
    eventTime: "04:30 pm utc",
    eventCity: "Dallas TX",
    Distance: 15
  },
  {
    id: 2,
    image: "https://i.imgur.com/DqAATM9.png",
    eventTitle: "Dummy Event Title",
    eventDate: "04:30 pm utc",
    eventTime: "04:30 pm utc",
    eventCity: "Dallas TX",
    Distance: 15
  }
];

export const EVENTS_DETAIL = {
  id: 1,
  images: [
    "https://i.imgur.com/bD7iNXX.jpg",
    "https://i.imgur.com/65YQcT6.png",
    "https://i.imgur.com/bD7iNXX.jpg",
    "https://i.imgur.com/65YQcT6.png"
  ],
  title: "Dummy Event Title",
  date: new Date().toISOString(),
  time: "04:30 pm utc",
  rating: 4.3,
  remarks: "Excellent",
  reviews: 215,
  eventInfo:
    "This Is Dummy Copy It Is NotM eant To Be Read It Has Been Pla this Is Dummy Copy It Is NotM eant To Be Read It Has Been Pla",
  location: "The Grand Public hall",
  address:
    "2952 Giraffe Hill Drive Grand Prairie Texas 75050 United State of america",
  distance: 5.5,
  lat: 44.968046,
  long: -94.420307,
  organizationLogo: "https://i.imgur.com/LGq78x7.jpg",
  organizationTitle: "Dummy Organization Title"
};

export const CATEGORY_LIST = [
  { title: "Financial", image: Images.cate_icon_1 },
  { title: "Education", image: Images.cate_icon_2 },
  { title: "Motivation", image: Images.cate_icon_3 },
  { title: "Consultancy", image: Images.cate_icon_4 },
  { title: "Services", image: Images.cate_icon_5 },
  { title: "Communication", image: Images.cate_icon_6 },
  { title: "Health & Fitness", image: Images.cate_icon_7 },
  { title: "Grooming", image: Images.cate_icon_8 },
  { title: "Careers", image: Images.cate_icon_9 }
];

export const SP_LIST = [
  {
    name: "Oscar Wild",
    designation: "Educationist",
    rating: 4.1,
    ratingCount: 125,
    image: "https://i.imgur.com/cFHiyXa.png"
  },
  {
    name: "Bryan Nelson",
    designation: "Motivational Speaker",
    rating: 4.1,
    ratingCount: 125,
    image: "https://i.imgur.com/SwKyR6o.png"
  },
  {
    name: "Oscar Wild",
    designation: "Educationist",
    rating: 4.1,
    ratingCount: 125,
    image: "https://i.imgur.com/cFHiyXa.png"
  },
  {
    name: "Bryan Nelson",
    designation: "Motivational Speaker",
    rating: 4.1,
    ratingCount: 125,
    image: "https://i.imgur.com/SwKyR6o.png"
  },
  {
    name: "Oscar Wild",
    designation: "Educationist",
    rating: 4.1,
    ratingCount: 125,
    image: "https://i.imgur.com/cFHiyXa.png"
  },
  {
    name: "Bryan Nelson",
    designation: "Motivational Speaker",
    rating: 4.1,
    ratingCount: 125,
    image: "https://i.imgur.com/SwKyR6o.png"
  }
];
export const NewsChannel = [
  {
    channelName: "Marine Corps Times",
    link:
      "http://feeds.feedburner.com/marine-corps-times/news/pentagon-congress",

    Uniquekey: "marineCorpsTimes"
  },
  {
    channelName: "Army-Times",
    link: "http://feeds.feedburner.com/army-times/veterans",
    Uniquekey: "armyTimes"
  },
  {
    channelName: "Navy Times",
    link: "http://feeds.feedburner.com/navy-times/news/your-navy",
    Uniquekey: "navyTimes"
  },
  {
    channelName: "Air Force Times",
    link: "http://feeds.feedburner.com/air-force-times/news/your-air-force",
    Uniquekey: "aireForce"
  }
];
export const NOTIFICATIONS_LIST = [
  {
    id: 1,
    title: "new notification",
    notification: "New notification ",
    image: "https://i.imgur.com/NY4Ovza.png",
    date: moment()
      .subtract(2, "minutes")
      .toISOString()
  },
  {
    id: 2,
    title: "new notification",
    notification: "New notification ",
    image: "https://i.imgur.com/NY4Ovza.png",
    date: moment()
      .subtract(2, "hours")
      .toISOString()
  }
];
