import React from 'react'
import {
   Button,
   Input,
   Form,
   FormGroup,
   Container,
   Jumbotron,
   Label,
} from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import NavbarAdmin from '../../../component/NavigationAdmin'
import { Link, useHistory} from 'react-router-dom'
import productActions from '../../../redux/actions/item'
import NoImage from '../../../assets/images/noimage.png'

const EditProduct = (props) => {
   const dispatch = useDispatch()
   const history = useHistory()

   const { token } = useSelector((state) => state.auth)
   const stateProduct = useSelector((state) => state.detailProduct)
   const stateCategory = useSelector((state) => state.category)
   const stateUpdate = useSelector((state) => state.item)

   const [p, setp] = React.useState(props.computedMatch.params.id)
   const [idItem, setIdItem] = React.useState('')
   const [name, setName] = React.useState('')
   const [price, setPrice] = React.useState('')
   const [id_category, setIdCategory] = React.useState('')
   const [description, setDescription] = React.useState('')
   const [id_color, setIdColor] = React.useState('')
   const [id_condition, setIdCondition] = React.useState('')
   const [picture, setPicture] = React.useState('')
   const [readPicture, setReadPicture] = React.useState(null)
   const [visible, setVisible] = React.useState(true)

   const handleChangePicture = event => {
      console.log(event.target.files[0])
      const reader = new FileReader()
      reader.onload = () => {
         if (reader.readyState === 2) {
            setReadPicture(reader.result)
         }
      }
      reader.readAsDataURL(event.target.files[0])
      setPicture(event.target.files[0])
   }

   const getDetail = async () => {
      await dispatch(productActions.getDetail(props.computedMatch.params.id, token))
      // console.log('id', props.computedMatch.params.id)
      // console.log('p', p)
      setIdItem(stateProduct.dataItem?.id_item)
      setName(stateProduct.dataItem?.name)
      setPrice(stateProduct.dataItem?.price)
      setIdCategory(stateProduct.dataItem?.id_category)
      setDescription(stateProduct.dataItem?.description)
      setIdColor(stateProduct.dataItem?.id_color)
      setIdCondition(stateProduct.dataItem?.id_condition)
      setPicture(stateProduct.dataItem?.picture)
   }

   const handleSubmit = async (evt) => {
      evt.preventDefault()
     if (readPicture !== null) {
        const data = new FormData();
        data.append('name', name)
        data.append('price', price)
        data.append('id_category', id_category)
        data.append('id_condition', id_condition)
        data.append('id_color', id_color)
        data.append('description', description)
        data.append('picture', picture)
        await dispatch(productActions.updateProductWithPicture(token, data, props.computedMatch.params.id))
        // console.log(dispatching.action.payload.data.success)
        if (stateUpdate.success) {
           alert('Product has ben added!')
           history.push('/admin/product')
        } else {
           alert('Product fail to added!')
        }
     } else {
        const data = {
           name,
           price,
           id_category,
           id_condition,
           id_color,
           description
        }
        await dispatch(productActions.updateProductWithOutPicture(token, data, props.computedMatch.params.id))
        history.push('/admin/product')
     }
   }
   
   React.useEffect(() => {
      getDetail()
   }, [idItem])

   return (
      <>
         <NavbarAdmin />
         <Jumbotron>
            <Container>
               <h1>Edit Product</h1>
            </Container>
         </Jumbotron>

         <Container md={6}>
            <Form onSubmit={handleSubmit}>
               <FormGroup>
                  <Label>Name</Label>
                  <Input type="text" name="name" placeholder="Name Item" value={name} onChange={e => setName(e.target.value)} />
               </FormGroup>

               <FormGroup>
                  <Label>Price</Label>
                  <Input type="text" name="price" placeholder="Price Item" value={price} onChange={e => setPrice(e.target.value)}  />
               </FormGroup>

               <FormGroup>
                  <Label>Category</Label>
                  <Input type="select" name="id_category" value={id_category} onChange={e => setIdCategory(e.target.value)} >
                     <option selected>--Select category--</option>
                     {stateCategory.dataCategory?.length > 0 && stateCategory.dataCategory.map(o => (
                        <option key={o.id_category} value={o.id_category}>{o.name_category}</option>
                     ))}
                  </Input>
               </FormGroup>

               <FormGroup>
                  <Label>Condition</Label>
                  <Input type="select" name="id_condition" value={id_condition} onChange={e => setIdCondition(e.target.value)} >
                        <option selected>--Select condition--</option>
                        <option value={1}>New</option>
                        <option value={2}>Secondhand</option>
                  </Input>
               </FormGroup>

               <FormGroup>
                  <Label>Color</Label>
                  <Input type="select" name="id_color" value={id_color} onChange={e => setIdColor(e.target.value)} >
                        <option selected>--Select color</option>
                        <option value={1}>Red</option>
                        <option value={2}>Blue</option>
                        <option value={3}>Gray</option>
                        <option value={4}>Green</option>
                        <option value={6}>Brown</option>
                        <option value={7}>White</option>
                        <option value={8}>Black</option>
                  </Input>
               </FormGroup>

               <FormGroup>
                  <Label>Description</Label>
                  <Input type="textarea" name="description" placeholder="Description" value={description} onChange={e => setDescription(e.target.value)}  />
               </FormGroup>

               <FormGroup>
                  <Label>File</Label>
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
                  <Link to="/admin/product" className="ml-4"><Button style={{width: 80, height: 40, backgroundColor: '#DB3022'}}>Back</Button></Link>
               </FormGroup>
            </Form>
         </Container>
      </>
   )
}

export default EditProduct