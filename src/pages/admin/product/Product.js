import React from 'react'
import numeral from 'numeral'
import {
   Container,
   Table,
   Jumbotron,
   Button,
   Input,
   Pagination,
   PaginationItem,
   PaginationLink,
} from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import productActions from '../../../redux/actions/item'
import NavbarAdmin from '../../../component/NavigationAdmin'

const Product = (props) => {
   const dispatch = useDispatch()
   const history = useHistory()

   const {token} = useSelector((state) => state.auth)
   const stateProduct = useSelector((state) => state.item)
   console.log('state', stateProduct)

   const deleted = (param) => {
      console.log('param',param)
      dispatch(productActions.deleteProduct(token, param))
      if (stateProduct.success) {
         alert(`ID ${param} has ben deleted!`)
         dispatch(productActions.reset())
      } else {
         alert(`ID ${param} fail to delete!`)
      }
   }

   React.useEffect(() => {
      dispatch(productActions.getData())
      console.log(stateProduct)
   }, [stateProduct.dataDeleteItem, stateProduct.dataUpdateItem])//////////////////////////////////

   let angka = 1

   return (
      <>
         <NavbarAdmin />
         <Jumbotron>
            <Container>
               <h1>Manage Product</h1>
            </Container>
         </Jumbotron>

         <Container className="mt-2" md={6}>
            <Link to={"/admin/product/add"}>
               <Button className="border-0" style={{backgroundColor: '#DB3022'}}>
                  Create Item
               </Button>
            </Link>

            <Input className="ml-auto w-25" name="search" type="text" placeholder="Search" />

            <Table hover bordered responsive className="mt-3" >
               <thead>
                  <tr>
                     <th>No</th>
                     <th>Name</th>
                     <th>Category</th>
                     <th>Price</th>
                     <th className="w-20 text-center">Actions</th>
                  </tr>
               </thead>
               {stateProduct.dataItem?.length > 0 && stateProduct.dataItem.map(o => (
                  <tbody>
                     <tr>
                        <td scope="row">{angka++}</td>
                        <td>{o.name}</td>
                        <td>{o.category}</td>
                        <td>
                           <div className="d-flex justify-content-between">
                              <div>
                                 Rp
                              </div>

                              <div>
                                 {numeral(o.price).format(0, 0).toString().replace(",", ".")}
                              </div>
                           </div>
                        </td>
                        <td width={200}>
                           <div className="d-flex justify-content-around align-items-center">
                              {/* <div>
                                 <Button size="md" color="primary" style={{width: 80, height: 40}}>Detail</Button>
                              </div> */}
                              
                              <div>
                                 <Link to={`/admin/product/edit/${o.id_item}`, {pathname: `/admin/product/edit/${o.id_item}`, state: {id: o.id_item}}}>
                                    <Button size="md" color="warning" style={{width: 80, height: 40}}>Edit</Button>
                                 </Link>
                              </div>

                              <div>
                                 <Button size="md" color="danger" style={{width: 80, height: 40}} onClick={() => deleted(o.id_item)}>Delete</Button>
                              </div>
                           </div>
                        </td>
                     </tr>
                  </tbody>
               ))}
            </Table>

            <Pagination aria-label="Page navigation example">
               <PaginationItem>
                  <PaginationLink first href="#" />
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink previous href="#" />
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink href="#">
                     1
                  </PaginationLink>
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink next href="#" />
               </PaginationItem>
               <PaginationItem>
                  <PaginationLink last href="#" />
               </PaginationItem>
            </Pagination>

         </Container>
      </>
   )
}

export default Product