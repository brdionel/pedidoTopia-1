import React from 'react'

import { useHistory } from 'react-router-dom'
//Material-ui
import { withStyles, makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
//import { Box } from "@material-ui/core";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 17,
  },
}))(TableCell)

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow)

const useStyles = makeStyles({
  table: {
    minWidth: 500,
  },
})

export default function Table_Products() {
  const history = useHistory()
  const products = [
    {
      id: 1,
      image: {
        src:
          'https://www.venex.com.ar/products_images/1599498841_notebooklenovothinkpade14corei510210u8gbssd256gb14.jpg',
      },
      title: 'NOTEBOOK LENOVO THINKPAD E14 CORE I5',
      stock: 20,
      price: 109000,
      sku: '111TY777UI89',
      description:
        'La ThinkPad E14 se ha sometido a pruebas de especificaciones militares para soportar los entornos de trabajo más extremos y adversos, por lo que no te dejará tirado. No solo puede funcionar en cualquier lugar, desde lugares de frío extenso hasta zonas con un calor sofocante, sino también puede soportar golpes, caídas e incluso derrames accidentales.',
    },

    {
      id: 2,
      image: {
        src:
          'https://d26lpennugtm8s.cloudfront.net/stores/911/585/products/jbl-flip-5-21-a3cd6bd39bb60bc05f15810292397285-640-0.jpg',
      },
      title: 'PARLANTE BLUETOOTH JBL FLIP 5',
      stock: 15,
      price: 12999,
      sku: 'JBLFLIP5BLKAM',
      description:
        'Lleva la fiesta contigo. No te preocupes por cosas sin importancia como cargar la batería. El Flip 5 te ofrece más de 12 horas de reproducción. Disfruta de una música más potente, durante más tiempo y con el famoso sonido JBL.',
    },

    {
      id: 3,
      image: {
        src:
          'https://d26lpennugtm8s.cloudfront.net/stores/001/166/416/products/8245933-1-11-67cb081bd5fd9832d315886143864513-480-0.jpg',
      },
      title: 'Impresora Hp Ink 5075 Advantage',
      stock: 43,
      price: 19999,
      sku: '824593',
      description:
        'Impresora Todo en Uno HP DeskJet Ink Advantage 5075 Conectividad inalámbrica en la que puede confiar Obtenga una configuración sencilla Wi-Fi en menos de un minuto y empiece a imprimir al instante.',
        
    },
  ]
  const classes = useStyles()
  return (
    <div
      style={{
        width: '850px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '80px',
      }}
    >
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell align='center'>&nbsp;</StyledTableCell>
              <StyledTableCell align='center'>Imagen&nbsp;</StyledTableCell>
              <StyledTableCell align='left'>Producto&nbsp;</StyledTableCell>
              <StyledTableCell align='center'>Proveedor&nbsp;</StyledTableCell>
              <StyledTableCell align='right'>Stock</StyledTableCell>
              <StyledTableCell align='right'>Sku&nbsp;</StyledTableCell>
              <StyledTableCell align='right'>Descripcion&nbsp;</StyledTableCell>
              <StyledTableCell align='right'>Precio</StyledTableCell>
              <StyledTableCell align='right'>Publicar</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products ? (
              products.map((product) => (
                // console.log(product)&&
                <StyledTableRow key={product.id}>
                  <StyledTableCell align='left'>
                    <Button href={`/answer/${product.id}`}>
                      <i>
                        <DeleteOutlineIcon />
                      </i>
                    </Button>
                  </StyledTableCell>
                  <StyledTableCell align='center'>
                    <span>
                      <img
                        src={product.image && product.image.src}
                        height='100px'
                        width='100px'
                        alt=''
                      />
                    </span>
                  </StyledTableCell>
                  <StyledTableCell align='left'>
                    {product.title}
                  </StyledTableCell>
                  <StyledTableCell align='center'>Sin subir</StyledTableCell>
                  <StyledTableCell align='right'>
                    {product.stock}
                  </StyledTableCell>
                  <StyledTableCell align='right'>{product.sku}</StyledTableCell>
                  <StyledTableCell align='right'>
                    {product.description.slice(0, 40) + '...'}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    {product.price}
                  </StyledTableCell>
                  <StyledTableCell align='right'>
                    <Button href={`/edit/${product.id}`} color='primary'>
                      Publicar
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))
            ) : (
              <p>No hay datos para mostrar</p>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ paddingLeft: 'auto' }}>
        <tr>
          <td>
            <Button variant='contained' color='primary' href='/product'>
              Crear Producto
            </Button>
          </td>
          <td>
            <div>
              <Button variant='contained' color='secondary' href='/'>
                Cancelar
              </Button>
            </div>
          </td>
        </tr>
      </div>
    </div>
  )
}