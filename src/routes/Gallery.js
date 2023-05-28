import { useEffect, useContext } from "react";
import { FirebaseDBContext, AppStateContext } from "../App";
import { useNavigate, useParams } from "react-router-dom";
import fetchImageGallery from "../firebase/fetchImageGallery";
import { Masonry } from "@mui/lab";
import { Typography, Container, Box } from "@mui/material";
import MasonryTile from "../components/gallery/MasonryTile";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Gallery = () => {
  const navigate = useNavigate();
  const db = useContext(FirebaseDBContext);
  const { appState, setAppState } = useContext(AppStateContext);
  const { galleryId } = useParams();

  useEffect(() => {
    const fetchGallery = async () => {
      const images = await fetchImageGallery(db, galleryId);
      setAppState({ ...appState, images });

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
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            display: "flex",
            alignItems: "center",
          }}
          onClick={() => navigate("/")}
        >
          <ArrowBackIcon />
        </div>
        <Typography
          variant="h3"
          sx={{ marginTop: 6, marginBottom: 6 }}
          fontWeight={"light"}
          letterSpacing={"4px"}
        >
          {galleryId.charAt(0).toUpperCase() + galleryId.slice(1)}
        </Typography>
      </Box>

      <Masonry columns={{ xs: 1, md: 3, lg: 4 }}>
        {appState?.images?.map((image) => (
          <MasonryTile key={image.id} image={image} />
        ))}
      </Masonry>
    </Container>
  );
};

export default Gallery;
