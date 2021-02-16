import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import './FAQ.scss';

const FAQ = () => {
    return (
        <>
            <div className="accordion-container">
            <div className="faq-title">Frequently Asked Questions</div>
            <Accordion defaultActiveKey="0">
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        <div className="accordion-question">What size briquetter will I need?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body className="accordion-answer">We analyze total chip production and chip quality/density along with hours a day to work to recommend unit size</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        <div className="accordion-question">How do I calculate my chip quality and density?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body className="accordion-answer">
                        <div>A cubic ft of representative chips weighed on an accurate scale will allow Aspen to calculate density.</div> 
                        <div>Also send Aspen at least a cubic yard of representative chips and we will test puck the chips and send a report regarding quality.</div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        <div className="accordion-question">How do you calculate briquetter rental costs?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="2">
                    <Card.Body className="accordion-answer">
                    Monthly rental cost has a base price for each model which will be reduced for longer term contracts
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        <div className="accordion-question">Is “Lease to own” an option?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="3">
                    <Card.Body className="accordion-answer">
                    Aspen can provide long term lease or sell it’s equipment, however we cannot provide “Lease to Own” services
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                        <div className="accordion-question">Who is responsible for transport and setup of the equipment?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="4">
                    <Card.Body className="accordion-answer">
                    <div>Aspen will provide shipping options with associated costs</div>
                    <div>One day of Setup/training is normally provided by Aspen</div>
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                        <div className="accordion-question">Who is responsible for hydraulic fluid?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="5">
                    <Card.Body className="accordion-answer">
                        Hydraulic fluid is provided by the Lessee.  Aspen cannot ship unit with fluid.
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="6">
                        <div className="accordion-question">Who is responsible for damage to a rental unit caused by solids (ferrous of large aluminum)?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="6">
                    <Card.Body className="accordion-answer">
                    Aspen always recommends chip shredding or conditioning to remove solids.  
                    Rental machines damaged by solids are Lessee’s responsibility to repair
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="7">
                        <div className="accordion-question">Does Aspen provide repair services?</div>
                    </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="7">
                    <Card.Body className="accordion-answer">
                    Aspen has repair technicians on staff to assist or be hired to do repairs
                    </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        </>
    );
}

export default FAQ;