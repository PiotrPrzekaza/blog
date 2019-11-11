import React from 'react'
import { Card, CardTitle, CardBody, Form, FormGroup, Input } from 'reactstrap'


const Sidebar = () => (
    <aside>
        <Card>
            <CardBody>
                <CardTitle className="text-center text-uppercase mb-3">
                    Newsletter
                </CardTitle>
                <Form className="text-center">
                    <FormGroup>
                        <Input type="email" name="email" placeholder="Your address@email..." />
                    </FormGroup>
                    <button className="btn btn-outline-success text-uppercase">
                        Subscribe
                    </button>
                </Form>
            </CardBody>
        </Card>
        <Card>
            <CardBody>
                <CardTitle className="text-uppercase text-center">
                    Advertisement
                </CardTitle>
                <img src="https://via.placeholder.com/320x200" alt="Advert" style={{ width: "100%" }} />
            </CardBody>
        </Card>
    </aside>
)


export default Sidebar;