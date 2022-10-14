//Facturas
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useRef } from "react";
import { TextField, Grid } from "@mui/material";
//<> </>
const Facturas = () => {
  const componentRef = useRef();
  /* Clientes */
  const rowsc = [
    createRowc("Steven Alex Contreras", 9876543, 953664758, "Avenida 5"),
  ];
  function createRowc(nombre, dni, telefono, direc) {
    const price = priceRowc(dni, telefono, direc);
    return { nombre, dni, telefono, direc, price };
  }
  function priceRowc(dni, telefono) {
    return dni * telefono;
  }
  /* Prductos */
  const TAX_RATE = 0.08;

  const rowsp = [
    createRow("Televisor", 1300, 2),
    createRow("Licuadora", 78, 3),
  ];

  function createRow(descripcion, precio, cantidad) {
    const price = priceRowp(precio, cantidad);
    return { descripcion, precio, cantidad, price };
  }

  function priceRowp(precio, cantidad) {
    return precio * cantidad;
  }

  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  const invoiceSubtotal = subtotal(rowsp);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div style={{ height: 400, width: "100%" }}>
      {/*  */}
      <br />
      <h1 style={{ textAlign: "left", fontSize: "30px" }}>
        <img
          src="https://seeklogo.com/images/F/factura-electronica-logo-6913D465C7-seeklogo.com.jpg"
          width={100}
          align="right"
        />
        Factura
        {rowsc.map((rowc) => (
          <div key={rowc.nombre} style={{ fontSize: "10px" }}>
            <p>Cliente: {rowc.nombre}</p>
            <p>DNI: {rowc.dni}</p>
            <p>Telefono: {rowc.telefono}</p>
            <p>Dirección: {rowc.direc}</p>
          </div>
        ))}
        <h1 style={{ textAlign: "right", fontSize: "10px" }}>Ruc: 000000000</h1>
        <p style={{ textAlign: "right", fontSize: "10px" }}>E001-33</p>
      </h1>
      <table style={{ borderCollapse: "collapse", width: "75%", cellpadding: '60px', borderColor: 'transparent'}} border={1} >
        <tr style={{ textAlign: "left" }}>
          <th>Descripción</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>Suma</th>
        </tr>
        <tbody style={{ textAlign: "left" }}>
          {rowsp.map((rowp) => (
            <tr key={rowp.descripcion} rowSpan={3}>
              <td>{rowp.descripcion}</td>
              <td>{rowp.precio}</td>
              <td>{rowp.cantidad}</td>
              <td>{ccyFormat(rowp.price)}</td>
            </tr>
          ))}
          <tr>
            <td></td>
            <td>subtotal</td>
            <td></td>
            <td>{ccyFormat(invoiceSubtotal)}</td>
          </tr>
          <tr>
            <td></td>
            <td>IGV</td>
            <td>{`${(TAX_RATE * 100).toFixed(0)} %`}</td>
            <td>{ccyFormat(invoiceTaxes)}</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td></td>
            <td>{ccyFormat(invoiceTotal)}</td>
          </tr>
        </tbody>
      </table>

 {/* <Table sx={{ minWidth: 700 }} aria-label="spanning table" border={0}>
        <TableHead>
          <TableRow>
            <TableCell xs={{ align: "left" }} colSpan={3}>
              <h1 align="center" style={{ margin: "0px" }}>
                Factura
              </h1>
              {rowsc.map((rowc) => (
                <div key={rowc.nombre}>
                  <p>Cliente: {rowc.nombre}</p>
                  <p>DNI: {rowc.dni}</p>
                  <p>Telefono: {rowc.telefono}</p>
                  <p>Dirección: {rowc.direc}</p>
                </div>
              ))}
            </TableCell>
            <TableCell align="right">
              <img
                src="https://seeklogo.com/images/F/factura-electronica-logo-6913D465C7-seeklogo.com.jpg"
                width={200}
              />
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <Table sx={{ minWidth: 700 }} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell>Descripcion</TableCell>
            <TableCell align="right">Precio.</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Suma</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsp.map((rowp) => (
            <TableRow key={rowp.descripcion}>
              <TableCell>{rowp.descripcion}</TableCell>
              <TableCell align="right">{rowp.precio}</TableCell>
              <TableCell align="right">{rowp.cantidad}</TableCell>
              <TableCell align="right">{ccyFormat(rowp.price)}</TableCell>
            </TableRow>
          ))}
          <TableRow>
            <TableCell rowSpan={3} />
            <TableCell colSpan={2}>Subtotal</TableCell>
            <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>IGV</TableCell>
            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(
              0
            )} %`}</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
          </TableRow>
        </TableBody>
      </Table> */}
    </div>
  );
};
export default Facturas;
