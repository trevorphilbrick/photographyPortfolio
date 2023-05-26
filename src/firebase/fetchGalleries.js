import { collection, getDocs } from "firebase/firestore";

const fetchGalleries = async (db) => {
  let galleriesArray = [];
  const galleries = await getDocs(collection(db, "galleries"));
  galleries.forEach((gallery) => {
    galleriesArray.push(gallery.data());
  });

  return galleriesArray;
};

export default fetchGalleries;
