import React from 'react'
import { Section } from '../components'
import { Row, Col, Button, Form } from 'react-bootstrap'
import contact from '../data/contact.json'

export class Contact extends React.Component {
  render () {
    return (
      <Section id="contact" title="Get In Touch">
        <Row>
          <Col md={4}>
            <div className="contact-info">
              <h3>{contact.title}</h3>
              <div dangerouslySetInnerHTML={ { __html: contact.subTitle } } />
            </div>
          </Col>
        
        </Row>
      </Section>
    )
  }
}

export default Contact
