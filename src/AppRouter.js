import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeLayout from "./HomeLayout";
import AddCard from "./AddCard";

function AppRouter () {
    return(
        <Router>
            <div>
                <Route path="/" component={HomeLayout} />
                <Route exact path="/add-card" component={AddCard} />
            </div>
        </Router>
    )
}

export default AppRouter;