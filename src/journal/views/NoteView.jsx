import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid 
        className="animate__animated animate__fadeIn animate__faster"
        container 
        direction="row" 
        justifyContent="space-between" 
        sx={{ mb: 1 }}
    >
        <Grid item>
            <Typography fontSize={39} fontWeight="light">08 de Noviembre, 2023</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ p: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
                type="text"
                variant="filled"
                fullWidth
                placeholder="Agrega un título"
                label="Título"
                sx={{ border: "none", mb: 1 }} 
            />
            <TextField
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué ha ocurrido hoy?"
                minRows={5}
            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
