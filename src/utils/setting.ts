export const API_URL =  process.env.REACT_APP_BASE_URL || "https://rewardwatchers.taskdino.com/core/"
import { ImageInterface } from "typings";
import _get from "lodash.get";
export const getImageThumbnailUrl = (image: ImageInterface) => { 
    if (_get(image, "thumbnail", null)) {
      return image.thumbnail;
    } else if (_get(image, "small", null)) {
      return image.small;
    } else if (_get(image, "medium", null)) {
      return image.medium;
    } else {
      return image && image.url;
    }
};