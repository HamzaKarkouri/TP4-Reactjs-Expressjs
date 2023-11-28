import { useState } from "react";
import { addProduct } from "../services/product.services";
import { useNavigate } from "react-router-dom";
import { Form ,Button } from 'react-bootstrap';
export function ProductAddForm(){
    const [name,setName]=useState("");
    const [price,setPrice]=useState(0);
    const navigate=useNavigate()
    function handlForm(event){
        event.preventDefault();
        const p={"name":name,"price":price}
        addProduct(p);
        navigate("/products");
    }
    return(
      <Form onSubmit={(e)=>handlForm(e)}>
      
      <Form.Group controlId="formName">
        <Form.Label>Name: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          
          onChange={(e)=>setName(e.target.value)}
        />
      </Form.Group>

      
      <Form.Group controlId="formName">
        <Form.Label>Prix: </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter prix"
          name="prix"
          
          onChange={(e)=>setPrice(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" value={"Enregistrer"}>
        Ajouter
      </Button>
      <Button variant="secondary" value={"Annuler"} className="ml-2" type="reset">
        Cancel
      </Button>
      
  </Form>

  
    )
}