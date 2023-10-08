import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Home() {

    const [contact, setContact] = useState([])

    // api call

    const getAllContact = async () => {
        const result = await axios.get('/db.json')
        setContact(result.data.contacts);
    }

    useEffect(() => {
        getAllContact()
    }, [])

    console.log(contact);


    return (
        <div>

            <div>
                <Container>
                    <Row className=' text-center mt-5 pt-5'>
                        <Col lg={6} md={6} sm={12} className='m-0'>
                            <img src="https://i.postimg.cc/3xCS7Cfz/depositphotos-69882613-stock-photo-contact-us-web-icons-on.webp" alt="" className='img1 w-100' />
                        </Col>
                        <Col lg={6} md={6} ms={12}>
                            <h1 className='head1'>one place for <br /> all your <b>Contacts</b> </h1>
                            <p className='p1 mt-5 mb-5 pb-5'>Manage contacts from a single place and access them everywhere together with your team.</p>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr />

            {/* contact */}
            <div>
                <div className='text-center'>
                    <h2 className='m-5 p-5'><b>CONTACTS</b> </h2>

                    {/* card */}

                   
                   <Container>
                    <Row>
                        {
                        
                        contact.length > 0 ? contact.map(i=>
                     <Col className='d-flex justify-content-center align-item-center'>

                  <Link to={`/view/${i.id}`} style={{ textDecoration: 'none'}}>
                        <div>

                            <Card style={{ width: '18rem' }} className='mt-5'>
                                <Card.Img variant="top" src={i.profile} />
                                <Card.Body>
                                    <Card.Text className='cText'>
                                        <h5>{i.name}</h5>
                                    </Card.Text>
                                </Card.Body>
                            </Card>


                        </div>
                        </Link>
                        </Col>
                        ):<h1>No Data Found</h1>
                      }
                    </Row>
                   </Container>
                </div>
            </div>




        </div>
    )
}

export default Home