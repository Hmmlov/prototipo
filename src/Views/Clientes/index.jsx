//Clientes
import DataGridDemo from "../../Components/Table/index";
import { Stack, Button } from "@mui/material";
import IconToolTip from '../../Components/Icons/IconToolTip'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const Clientes = () => {
  const columns = [
    {
        field: "Acciones",
        type: "Actions",
        getActions: (cellValues) => [
            /*  */
            <EditIcon />,
            /*  */
            /*  */
            <DeleteIcon />,
            /*  */
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
        Acciones: <EditIcon/>,
        coD_Clientes: "Código",
        noM_Clientes: "Nombre"
        
    },
  ];


  return (
    <>
        <div style={{ flexGrow: 1 }}>
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
