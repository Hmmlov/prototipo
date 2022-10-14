//Productos
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
const Productos = () => {
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
      field: "coD_Productos",
      headerName: "Código",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "deS_Productos",
      headerName: "Descripcion",
      width: 400,
      headerAlign: "center",
    },
    {
      field: "precio",
      headerName: "Precio",
      width: 100,
      headerAlign: "center",
    },
    {
      field: "Stock",
      headerName: "Stock",
      width: 100,
      headerAlign: "center",
    }
  ];

  const Rows = [
    {
      coD_Productos: "001",
      deS_Productos: "TOYOTA Aygo 70 x-sport 5 Puertas (Año 2021)",
      precio: "62159",
      Stock: "10",   
    },
    {
      coD_Productos: "002",
      deS_Productos: "Aygo 70 x-sport x-shift - 5-puertas - 2021",
      precio: "78000",
      Stock: "10",
    },
    {
      coD_Productos: "003",
      deS_Productos: "Aygo 70 x-style - 5-puertas - 2020",
      precio: "57000",
      Stock: "5",
    },
    {
      coD_Productos: "004",
      deS_Productos: "Cable de 6 cil Chevrolet",
      precio: "200",
      Stock: "15",
    },
    {
      coD_Productos: "005",
      deS_Productos: "bobina chevrolet ",
      precio: "180",
      Stock: "20",
    },
    {
      coD_Productos: "006",
      deS_Productos: "filtro de aire motor",
      precio: "4400",
      Stock: "10",
    },
  ];

  return (
    <>
      <h1 style={{ margin: '0px' }}>Productos</h1>
      <Button variant="contained" onClick={handleOpen}>
        Agregar
      </Button>
      <div style={{ flexGrow: 1, marginTop: 15 }}>
        <DataGridDemo
          id={(row) => row.coD_Productos}
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

export default Productos;
