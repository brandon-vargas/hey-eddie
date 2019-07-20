import React, { Component } from 'react';
import SimpleCard from './SimpleCard';
import {Container, Row, Col } from 'react-grid-system';
import './HomeLayout.css'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Zoom from '@material-ui/core/Zoom';
import {
    Route,
    Link,
  } from 'react-router-dom';

class HomeLayout extends Component {

    constructor(props){
        super(props)
        console.log(this.props)
        this.state = {
            login: true,
            notEditing: true,
            mainDataList: this.props.mainDataList
        }
        this.addCard = this.addCard.bind(this);
        this.createColWithCard = this.createColWithCard.bind(this);
        // below is how to bind functions? 
        // this.updateColor = this.updateColor.bind(this)
    }

    componentDidMount() {
        // const showAddButton = localStorage.getItem('notEditing') === 'true';
        // console.log(showAddButton)
        // this.setState({notEditing: showAddButton});
    }

    getList(){
        //TODO: here, you will be calling the db to pull the information if they verified successfully.
        var list = [
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
        this.setState({
            mainDataList: list,
        });
        // return [
        //                 {
        //                     name: "Pappasito's Cantina",
        //                     desc: "Delicous Mexican food!"
        //                 },
        //                 {
        //                     name: "Pappasito's Cantina",
        //                     desc: "Delicous Mexican food!"
        //                 },
        //                 {
        //                     name: "Pappasito's Cantina",
        //                     desc: "Delicous Mexican food!"
        //                 }
        //             ]
    }

    createColWithCard() {
        //TODO: Route is used below so that if the user clicks on the card, it can take them to a new page
        var rowData = this.state.mainDataList
        var row = rowData.map((cardInfo)=> {return <Col className="Column">
                                                        <Route>
                                                            <SimpleCard name={cardInfo.name} desc={cardInfo.desc}/>
                                                        </Route>
                                                    </Col>})
        return row
    }

    addCard(){
        this.setState({notEditing: false}); 
        // console.log(this.state.notEditing)
    }

    render() {
        return (
            <div style={{height: "100% !important"}}>
                <Container fluid style={{ lineHeight: '32px' }}>
                    <Row debug className="Row">
                        {this.createColWithCard()}
                    </Row>
                </Container>
                <Link to="/add-card">
                    <div className="FloatingButtonContainer">
                        <Zoom
                        in={this.state.login && this.state.notEditing}
                        >
                            <Fab color="primary" aria-label="Add" >
                                <AddIcon onClick={this.addCard} />
                            </Fab>
                        </Zoom>
                    </div>
                </Link>
            </div>
        ) 
    }
}

export default HomeLayout