import { useEffect, useContext, useState } from "react";
import fetchGalleries from "../../firebase/fetchGalleries";
import { FirebaseDBContext, AppStateContext } from "../../App";
import { Container, Grid, Typography, Divider } from "@mui/material";
import GalleryGridItem from "./GalleryGridItem";
import { ClipLoader } from "react-spinners";

const Galleries = () => {
  const db = useContext(FirebaseDBContext);
  const { setAppState, appState } = useContext(AppStateContext);
  const [isLoading, setIsLoading] = useState(false);

  const sortGalleries = galleries => {
    return galleries.sort((a, b) => {
      return a.order > b.order ? 1 : -1;
    });
  };

  const handleFetchGalleries = async () => {
    setIsLoading(true);
    const galleries = await fetchGalleries(db);
    setAppState(prevState => ({
      ...prevState,
      galleries: sortGalleries(galleries)
    }));

    setIsLoading(false);
  };
  useEffect(() => {
    handleFetchGalleries();
  }, []);
  return (
    <Container sx={{ mt: 4 }} id="galleries">
      <Typography variant="h4" fontWeight={300} marginBottom={2}>
        Galleries
      </Typography>
      <Divider sx={{ mb: 4 }} />
      <ClipLoader loading={isLoading} />
      <Grid container>
        {appState?.galleries?.map(gallery => (
          <GalleryGridItem key={gallery.name} gallery={gallery} />
        ))}
      </Grid>
    </Container>
  );
};

export default Galleries;
