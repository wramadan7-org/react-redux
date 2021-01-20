import React from 'react'
import {
   Container,
   Jumbotron,
   Button,
   Label,
   Input,
   Table,
   Form,
   FormGroup,
   Pagination,
   PaginationItem,
   PaginationLink,
   UncontrolledAlert,
} from 'reactstrap'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import categoryActions from '../../../redux/actions/category'
import NavbarAdmin from '../../../component/NavigationAdmin'

const Category = () => {
   const dispatch = useDispatch()
   const history = useHistory()

   const { token } = useSelector((state) => state.auth)
   const stateCategory = useSelector((state) => state.category)
   console.log('category', stateCategory)

   const deleted = async (param) => {
      console.log(param)
      const dispatching = await dispatch(categoryActions.deleteCategory(token, param))
      if (await dispatching.action.payload?.data?.success) {
         alert(`Category ID ${param} has been deleted`)
      } else {
         alert(`Fail to delete category ID ${param}`)
      }
   }

   React.useEffect(() => {
      dispatch(categoryActions.getData())
   }, [
         stateCategory.dataAddCategory,
         stateCategory.dataUpdateCategory,
         stateCategory.dataDeleteCategory
   ])

   return (
      <>
         <NavbarAdmin />
         <Jumbotron>
            <Container>
               <h1>Manage Category</h1>
            </Container>
         </Jumbotron>

         <Container className="mt-2" md={6}>
            <Link to={{pathname: 'category/add'}}>
               <Button className="border-0" style={{backgroundColor: '#DB3022'}}>
                  Create Category
               </Button>
            </Link>

            <Input className="ml-auto w-25" name="search" type="text" placeholder="Search" />

            <Table hover bordered responsive className="mt-3">
               <thead>
                  <tr>
                     <th>No</th>
                     <th>Name</th>
                     <th>Picture</th>
                     <th className="text-center">Actions</th>
                  </tr>
               </thead>

               {stateCategory.dataCategory?.length > 0 && stateCategory.dataCategory.map(o => (
                  <tbody>
                     <tr>
                        <td width={50} align="center">{o.id_category}</td>
                        <td width={300} >{o.name_category}</td>
                        <td className="" width={200} align="center" >
                           <div className="w-50 ">
                              <img style={{width: 120, height: 120, alignSelf: 'center', justifyContent: 'center'}} src={`${process.env.REACT_APP_BACKEND_URL}${o.picture}`} />
                           </div>
                        </td>
                        <td width={100} className="border">
                           <div className="d-flex justify-content-around align-items-center">
                              {/* <div>
                                 <Button size="md" color="primary" style={{width: 80, height: 40}}>Detail</Button>
                              </div> */}
                              
                              <div>
                                 <Link to={{pathname: `/admin/category/edit/${o.id_category}`, state: {id: o.id_category}}}>
                                    <Button size="md" color="warning" style={{width: 80, height: 40}}>Edit</Button>
                                 </Link>
                              </div>

                              <div>
                                 <Button size="md" color="danger" style={{width: 80, height: 40}} onClick={() => deleted(o.id_category)}>Delete</Button>
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

export default Category