import { useEffect, useContext } from "react";
import { FirebaseDBContext, AppStateContext } from "../App";
import { useParams } from "react-router-dom";
import fetchImageGallery from "../firebase/fetchImageGallery";
import { Masonry } from "@mui/lab";
import { Typography } from "@mui/material";

const Gallery = () => {
  const db = useContext(FirebaseDBContext);
  const { appState, setAppState } = useContext(AppStateContext);
  const { galleryId } = useParams();

  useEffect(() => {
    const fetchGallery = async () => {
      const images = await fetchImageGallery(db, galleryId);
      setAppState({ ...appState, images });
    };

    fetchGallery();

    console.log(appState);
  }, []);
  return (
    <>
      <Typography
        variant="h3"
        sx={{ marginTop: 6, marginBottom: 6 }}
        fontWeight={"light"}
      >
        {galleryId.charAt(0).toUpperCase() + galleryId.slice(1) + " Gallery"}
      </Typography>
      <Masonry>
        {appState?.images?.map((image) => (
          <img src={image.imageUrl} key={image.id} />
        ))}
      </Masonry>
    </>
  );
};

export default Gallery;
