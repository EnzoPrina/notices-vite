import React from "react";
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";

const ListadoNoticias = () => {
    const {noticias} = useNoticias()
  return (
    <>
      <Typography
        textAlign='center'
        MarginY={5}
        variant='h3'
        component='h2'
      >
        Ultimas Noticias
      </Typography>

      <Grid container spacing={2}
    >
        {noticias.map(noticia => (
            <Noticia 
            key={noticia.url}
            noticia={noticia}
            />
        ))}
      </Grid>
    </>
  );
};

export default ListadoNoticias
