//Clientes
import DataGridDemo from "../../Components/Table/index";
import { Stack, Button, Divider } from "@mui/material";
import IconToolTip from '../../Components/Icons/IconToolTip'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { GridActionsCellItem } from '@mui/x-data-grid';

const Clientes = () => {
  const columns = [
    {
      field: "Acciones",
      type: "actions",
      getActions: (params) => [
        /*  */
        <GridActionsCellItem
          icon={<DeleteIcon />}
          label="Delete"
        />,
        <GridActionsCellItem
          icon={<EditIcon />}
          label="Edit"
        />
      ],

    },
    {
      field: "coD_Clientes",
      headerName: "Código",
      width: 400,
      headerAlign: "center",
    },
    {
      field: "noM_Clientes",
      headerName: "Nombre",
      width: 400,
      headerAlign: "center",
    },
  ];

  const Rows = [
    {
      coD_Clientes: "Código",
      noM_Clientes: "Nombre"

    },
  ];


  return (
    <>
      <h1>Clientes</h1>
      <Button variant="contained">Agregar</Button>
      <div style={{ flexGrow: 1, marginTop:15}}>
        <DataGridDemo
          id={(row) => row.coD_Clientes}
          rows={Rows}
          columns={columns}
        />
      </div>
    </>
  );
};

export default Clientes;
