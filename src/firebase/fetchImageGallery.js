import { collection, query, where, getDocs } from "firebase/firestore";

const fetchImageGallery = async (db, galleryName) => {
  console.log(galleryName);
  const q = query(collection(db, "images"), where("tag", "==", galleryName));
  const images = await getDocs(q);
  let imagesArray = [];
  images.forEach((image) => {
    imagesArray.push(image.data());
  });

  return imagesArray;
};

export default fetchImageGallery;
