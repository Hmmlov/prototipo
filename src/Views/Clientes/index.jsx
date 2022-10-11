//Clientes
import * as React from "react";
import DataGridDemo from "../../Components/Table/index";
import {
  Stack,
  Button,
  TextField,
  Grid,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { GridActionsCellItem } from "@mui/x-data-grid";
const Clientes = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 28,
    p: 8,
  };
  const alerta = () => {
    alert('hola');
  }
  const columns = [
    {
      field: "Acciones",
      type: "actions",
      getActions: (params) => [
        /*  */
        <GridActionsCellItem icon={<DeleteIcon />} label="Delete" />,
        <GridActionsCellItem icon={<EditIcon />} label="Edit" />,
      ],
    },
    {
      field: "coD_Clientes",
      headerName: "Código",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "noM_Clientes",
      headerName: "Nombre",
      width: 400,
      headerAlign: "center",
    },
    {
      field: "dni",
      headerName: "DNI",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "telefono",
      headerName: "Telefono",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "direccion",
      headerName: "Dirección",
      width: 100,
      headerAlign: "center",
    },
  ];

  const Rows = [
    {
      coD_Clientes: "001",
      noM_Clientes: "Steven Alex Contreras",
      dni: "9876543",
      telefono: "953664758",
      direccion: "Avenida 5",

    },
    {
      coD_Clientes: "002",
      noM_Clientes: "Antonio Lovera Espín",
      dni: "5465673",
      telefono: "935646758",
      direccion: "Avenida 7",
    },
    {
      coD_Clientes: "003",
      noM_Clientes: "Yosmar Hinestroza",
      dni: "4675656",
      telefono: "964546463",
      direccion: "Avenida 9",
    },
  ];

  return (
    <>
      <h1 style={{ margin: '0px' }}>Clientes</h1>
      <Button variant="contained" onClick={handleOpen}>
        Agregar
      </Button>
      <div style={{ flexGrow: 1, marginTop: 15 }}>
        <DataGridDemo
          id={(row) => row.coD_Clientes}
          rows={Rows}
          columns={columns}
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack direction="row"
            spacing={1} xs={{ mb: 1, display: 'flex' }}>
            <Grid container spacing={1.5}>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Nombre y Apellidos"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="DNI"
                  fullWidth
                  variant="outlined"
                  inputProps={{ maxlength: '8' }}
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Telefono"
                  variant="outlined"
                  inputProps={{ maxlength: '9' }}
                />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Dirección"
                  variant="outlined"
                  inputProps={{ maxlength: '300' }}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  variant="contained"
                  onClick={alerta}
                >Guardar</Button>
              </Grid>
            </Grid>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Clientes;
