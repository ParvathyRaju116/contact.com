import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup';



function SingleView() {

const [allContact,setAllContact]=useState([])
const param=useParams()


const getContact =async ()=>{
    const result =await axios.get('/db.json')
    setAllContact(result.data.contacts)
}

const {id}=param


useEffect(()=>{
    getContact()
},[])

console.log(id);
console.log(allContact);

const singleContact =allContact.find(i=>i.id==id)
console.log(singleContact);

  return (
    <div>

      <div>

        <Container>
          {
            singleContact?
            <div className=' container text-center div3 p-3 mt-5'>
              <img src={singleContact.profile} alt="" className='mt-5 img2' style={{ margin: '0 auto' }} />
              <div className='text-center'>
              <h1 className=''>{singleContact.name}</h1><br />
              <ListGroup>
               <ListGroup.Item className='lgi1'><a href="" className='a1'><i class="fa-solid fa-envelope" style={{color:'black'}}></i>  {singleContact.email}</a></ListGroup.Item>
                 <ListGroup.Item className='lgi1'><a href="" className='a1'><i class="fa-solid fa-phone" style={{color:'black'}}></i>  {singleContact.mobile}</a></ListGroup.Item>
               <ListGroup.Item className='lgi1'><a href="" className='a1'><i class="fa-solid fa-location-dot"style={{color:'black'}}></i>  {singleContact.location}</a></ListGroup.Item>
               </ListGroup>
            </div>
            </div>:
            <div>
              <h1>No Data</h1>
            </div>
          }
        </Container>

      </div>

    </div>
  )
}

export default SingleView