import React, { Component } from 'react';
import SimpleCard from './SimpleCard';
import {Container, Row, Col } from 'react-grid-system';
import './HomeLayout.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class HomeLayout extends Component {

    getList(){
        //TODO: here, you will be calling the db to pull the information if they verified successfully.
        return [
            {
                name: "Pappasito's Cantina",
                desc: "Delicous Mexican food!"
            },
            {
                name: "Pappasito's Cantina",
                desc: "Delicous Mexican food!"
            },
            {
                name: "Pappasito's Cantina",
                desc: "Delicous Mexican food!"
            }
        ]
    }

    createColWithCard() {
        var rowData = this.getList()
        var row = rowData.map((cardInfo)=> {return <Col className="Column">
                                                        <SimpleCard name={cardInfo.name} desc={cardInfo.desc}/>
                                                    </Col>})
        return row
    }

    addCard(){
        //TODO: what do i want to show when the add button is hit? 
        // A Modal? a "new activity", what? 
        console.log("adfasdfasdfasdf")
    }

    render() {
        return (
            <div>
                <Container fluid style={{ lineHeight: '32px' }}>
                    <Row debug className="Row">
                        {this.createColWithCard()}
                    </Row>
                </Container>
                <div className="FloatingButtonContainer">
                    <Fab color="primary" aria-label="Add">
                        <AddIcon onClick={this.addCard} />
                    </Fab>
                </div>
            </div>
        ) 
    }
}

export default HomeLayout