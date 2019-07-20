import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import AddCard from "./AddCard";

class AppRouter extends Component {

    constructor(props){
        super(props)
        this.state = {
            mainDataList: []
        }
    }

    render(){
        return(
            <Router>
                <div>
                    <Route path="/" render={(props)=><HomeLayout {...props} mainDataList={this.state.mainDataList}/>}/>
                    <Route exact path="/add-card" component={AddCard} />
                </div>
            </Router>
        )
    }
}

export default AppRouter;