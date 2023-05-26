import { useEffect, useContext } from "react";
import fetchGalleries from "../../firebase/fetchGalleries";
import { FirebaseDBContext, AppStateContext } from "../../App";
import { Container, Grid, Typography } from "@mui/material";
import GalleryGridItem from "./GalleryGridItem";

const Galleries = () => {
  const db = useContext(FirebaseDBContext);
  const { setAppState, appState } = useContext(AppStateContext);

  const handleFetchGalleries = async () => {
    const galleries = await fetchGalleries(db);
    setAppState((prevState) => ({
      ...prevState,
      galleries,
    }));
  };
  useEffect(() => {
    handleFetchGalleries();
    console.log(appState);
  }, []);
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" fontWeight={300} marginBottom={4}>
        Galleries
      </Typography>
      <Grid container>
        {appState?.galleries?.map((gallery) => (
          <GalleryGridItem key={gallery.id} gallery={gallery} />
        ))}
      </Grid>
    </Container>
  );
};

export default Galleries;
