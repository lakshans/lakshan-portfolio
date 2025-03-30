import { Cloudinary } from "@cloudinary/url-gen/instance/Cloudinary";
import { CLOUDINARY_CLOUD_NAME } from "@/config";

const cloudinaryClient = new Cloudinary({
  cloud: {
    cloudName: CLOUDINARY_CLOUD_NAME,
  },
});

export default cloudinaryClient;