
import Box from '@mui/material/Box';
import React, { Component } from 'react';
import {LinearProgress} from "@mui/material";




export default class ProgressTopBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {progressValue: 10};
    }

    componentDidMount() {

        // setTimeout(function(){
        //     this.setState({progressValue:90});
        // }.bind(this),5000)
        // // }
        // console.log("aa")
    }

    render() {



        while (this.state.progressValue < 101) {

            // this.setState({progressValue: this.state.progressValue + 1})
            // console.log(this.state.progressValue)
        }

        return (
            <Box sx={{width: '100%'}}>
                <LinearProgress variant="determinate"
                                value={this.state.progressValue}/>


            </Box>
        );
    }
}