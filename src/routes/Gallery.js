import { useEffect, useContext, useState } from "react";
import { FirebaseDBContext, AppStateContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import fetchImageGallery from "../firebase/fetchImageGallery";
import { Masonry } from "@mui/lab";
import { Typography, Container, Box, useTheme } from "@mui/material";
import MasonryTile from "../components/gallery/MasonryTile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ClipLoader } from "react-spinners";
import { getAnalytics, logEvent } from "firebase/analytics";

const Gallery = () => {
  const navigate = useNavigate();
  const db = useContext(FirebaseDBContext);
  const { appState, setAppState } = useContext(AppStateContext);
  const { galleryId } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const theme = useTheme();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [appState.images]);

  useEffect(() => {
    logEvent(getAnalytics(), "view_gallery", {
      gallery_id: galleryId
    });
  }, []);

  useEffect(() => {
    const fetchGallery = async () => {
      const images = await fetchImageGallery(db, galleryId);
      setAppState({ ...appState, images });
      setIsLoading(false);

      return () => {
        setAppState({ ...appState, images: [] });
      };
    };

    fetchGallery();

    console.log(appState);
  }, []);
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            alignItems: "center"
          }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon />
        </div>
        <Typography variant="h3" sx={{ marginTop: 6, marginBottom: 6 }} fontWeight={"light"} letterSpacing={"4px"}>
          {galleryId.charAt(0).toUpperCase() + galleryId.slice(1)}
        </Typography>
      </Box>
      <ClipLoader loading={isLoading} color={theme.palette.text.primary} />
      <Masonry columns={{ xs: 1, md: 3 }}>
        {appState?.images?.map(image => (
          <MasonryTile key={image.id} image={image} />
        ))}
      </Masonry>
    </Container>
  );
};

export default Gallery;
