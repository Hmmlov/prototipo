//Proveedores
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
const Proveedores = () => {
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
      field: "coD_Proveedores",
      headerName: "Código",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "deS_Proveedores",
      headerName: "Descripcion",
      width: 400,
      headerAlign: "center",
    },
    {
      field: "ruc",
      headerName: "Ruc",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "telefono",
      headerName: "teléfono",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      width: 200,
      headerAlign: "center",
    },
    {
      field: "f_ingreso",
      headerName: "Fecha Ingreso",
      width: 500,
      headerAlign: "center",
    }
  ];

  const Rows = [
    {
      coD_Proveedores: "001",
      deS_Proveedores: "Steven Alex Contreras",
      ruc: "20100132592",
      telefono: "898789878",   
      email: "toyota@corporativo.com",
      f_ingreso: new Date(),
    },
    {
      coD_Proveedores: "002",
      deS_Proveedores: "Antonio Lovera Espín",
      ruc: "20297036981",
      telefono: "565645349",   
      email: "hyundai@corporativo.com",
      f_ingreso: new Date(),
    },
    {
      coD_Proveedores: "003",
      deS_Proveedores: "Yosmar Hinestroza",
      ruc: "20472468147",
      telefono: "994589342",   
      email: "Kia@corporativo.com",
      f_ingreso: new Date(),
    },
  ];
  

  return (
    <>
      <h1 style={{ margin: '0px' }}>Proveedores</h1>
      <Button variant="contained" onClick={handleOpen}>
        Agregar
      </Button>
      <div style={{ flexGrow: 1, marginTop: 15 }}>
        <DataGridDemo
          id={(row) => row.coD_Proveedores}
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
                  label="Proveedor"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={6} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Descripcion"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  type="number"
                  label="Precio"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  type="number"
                  label="Stock"
                  variant="outlined"
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

export default Proveedores;