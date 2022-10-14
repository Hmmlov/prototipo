//Ventas
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
const Ventas = () => {
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
      field: "coD_Ventas",
      headerName: "Código",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "noM_Producto",
      headerName: "Producto",
      width: 400,
      headerAlign: "center",
    },
    {
      field: "cantidad",
      headerName: "Cantidad",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "precio_Unitario",
      headerName: "Precio Unitario",
      width: 200,
      headerAlign: "center",
    },
    {
      field: "total",
      headerName: "Total",
      width: 100,
      headerAlign: "center",
    },
  ];

  const Rows = [
    {
      coD_Ventas: "001",
      noM_Producto: "TOYOTA Aygo 70 x-sport 5 Puertas (Año 2021)",
      cantidad: "3",
      precio_Unitario: "62159",
      total: "186477.0",
      
    },
    {
      coD_Ventas: "002",
      noM_Producto: "Cable de 6 cil Chevrolet",
      cantidad: "3",
      precio_Unitario: "200",
      total: "600.0",
    },
    {
      coD_Ventas: "003",
      noM_Producto: "filtro de aire motor",
      cantidad: "5",
      precio_Unitario: "4400",
      total: "22000",
    },
  ];

  return (
    <>
      <h1 style={{ margin: '0px' }}>Ventas</h1>
      <Button variant="contained" onClick={handleOpen}>
        Agregar
      </Button>
      <div style={{ flexGrow: 1, marginTop: 15 }}>
        <DataGridDemo
          id={(row) => row.coD_Ventas}
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
                  label="Producto"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Cantidad"
                  fullWidth
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={3} sm={12} xs={12}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Precio"
                  type="number"
                  variant="outlined"
                />
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <TextField
                  id="outlined-basic"
                  fullWidth
                  label="Total"
                  type="number"
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

export default Ventas;
