import React from 'react'
import {
   Jumbotron,
   Container,
   Label,
   Input,
   Form,
   FormGroup,
   Button,
} from 'reactstrap'
import NavbarAdmin from '../../../component/NavigationAdmin'
import { Link, useHistory } from 'react-router-dom'
import NoImage from '../../../assets/images/noimage.png'
import { useSelector, useDispatch } from 'react-redux'
import categoryActions from '../../../redux/actions/category'

const EditCategory = (props) => {
   const dispatch = useDispatch()
   const history = useHistory()

   const [id_category, setIdCategory] = React.useState('')
   const [name_category, setNamecategory] = React.useState('')
   const [picture, setPicture] = React.useState('')
   const [readPicture, setReadPicture] = React.useState(null)

   const { token } = useSelector((state) => state.auth)
   const stateDetailCategory = useSelector((state) => state.category)

   const handleChangePicture = event => {
      const reader = new FileReader()
      reader.onload = () => {
         if (reader.readyState === 2) {
            setReadPicture(reader.result)
         }
      }
      reader.readAsDataURL(event.target.files[0])
      setPicture(event.target.files[0])
   }

   const handleSubmit = async (evt) => {
      evt.preventDefault()
      const data = new FormData()
      data.append('name_category', name_category)
      data.append('picture', picture)
      const dispatching = await dispatch(categoryActions.udpateCategoryWithImage(token, data, props.computedMatch.params.id))
      if (await dispatching.action.payload?.data?.success) {
         alert('Category has ben changed!')
         await dispatch(categoryActions.reset())
         history.push('/admin/category')
      } else {
         alert('Fail to change category')
      }
   }

   const getDetail = async () => {
      await dispatch(categoryActions.getCategoryByd(props.computedMatch.params.id))
      setIdCategory(stateDetailCategory.dataCategoryById?.id_category)
      setNamecategory(stateDetailCategory.dataCategoryById?.name_category)
      setPicture(stateDetailCategory.dataCategoryById?.picture)
   }

   React.useEffect(() => {
      getDetail()
   }, [id_category])

   return (
      <>
         <NavbarAdmin />
         <Jumbotron>
            <Container>
               <h1>Edit Category</h1>
            </Container>
         </Jumbotron>

         <Container md={6}>
            <Form onSubmit={handleSubmit}>
               <FormGroup>
                  <Label>Name</Label>
                  <Input type="text" name="name_category" placeholder="Name Category" value={name_category} onChange={e => setNamecategory(e.target.value)} />
               </FormGroup>

               <FormGroup>
                  <Label>Picture</Label>
                  <div className="w-25 mb-2" >
                     <img
                        src={
                           picture?.length > 0
                              ? `${process.env.REACT_APP_BACKEND_URL}${picture}`
                              : readPicture?.length > 0
                                 ? readPicture
                                 : NoImage
                        }
                        className="w-100 align-items-center justify-content-center"
                        style={{height: 250, width: 150}}
                     />
                  </div>
                  <Input type="file" name="picture" accept="image/jpg, image/png" onChange={handleChangePicture} />
               </FormGroup>

               <FormGroup>
                  <Label></Label>
                  <Button type="submit" style={{width: 80, height: 40, backgroundColor: '#DB3022'}}>Submit</Button>
                  <Link to="/admin/category" className="ml-4"><Button style={{width: 80, height: 40, backgroundColor: '#DB3022'}}>Back</Button></Link>
               </FormGroup>
            </Form>
         </Container>
      </>
   )
}

export default EditCategory
