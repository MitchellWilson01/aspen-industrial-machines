import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import Briquetters from '../../cards/EquipmentCards/Briquetters/Briquetters';
import './Equipment.scss';


const Equipment = () => {
    return (
        <>
            <div className="equipment-briquetters-title">BRIQUETTERS</div>
            <Briquetters />
        </>
    );
}

export default Equipment;

/*
<ButtonGroup aria-label="Basic example" className="equipment-buttons">
                    <Button variant="secondary">Briquetters</Button>
                    <Button variant="secondary">Shredder</Button>
                    <Button variant="secondary">Conveyor</Button>
                    <Button variant="secondary">Layout</Button>
                </ButtonGroup>
*/