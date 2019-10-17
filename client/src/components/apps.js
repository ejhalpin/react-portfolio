import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import API from "../util/API";

const styles = {
    root:{
        
    }
}

class Apps extends Component {
    state={
        appList = []
    }

    componentDidMount() {
        API.getApps().then(res => {
            this.setState({appList: res.data});
        });
    }

    render() {
        
    }
}