import {useEffect,useState} from "react";
import {deleteProductByID,getAllProducts,getAllproducts} from "../services/product.services"
import { Link } from "react-router-dom";
import { Table ,Button } from 'react-bootstrap';
import { BsTrash, BsPencil } from 'react-icons/bs';
export  function ProductList(){
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetchProducts();
    },[])
    async function fetchProducts(){
        const res=await getAllProducts()
        setProducts(res.data);
    }
    async function deleteProduct(id){
        const res=await deleteProductByID(id)
        fetchProducts();
    }
    return(
      <>
        <Table bordered hover >
      <thead >
      <tr>
        <th>Nom</th>
        <th>Age</th>
      </tr>
      </thead>
      <tbody>
      {products.map((elem,index)=><tr key={index}>
        <td>{elem.name}</td>
        <td>{elem.price}</td>
        <td><Button onClick={() => deleteProduct(elem._id)} variant="danger"><BsTrash className="mr-1" /></Button><Button onClick={() => deleteProduct(elem._id)} variant="primary"><BsPencil className="mr-1" /></Button></td>
       
        </tr>)}
      </tbody>
  </Table>
  <Link to={"/products/new"}><Button variant="dark" size="lg">
      Ajouter un nouveau produit
    </Button></Link>
  </>);
}
