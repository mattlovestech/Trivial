import * as React from 'react';
import Box from '@mui/material/Box';
import answerBox from "./answerBox";



export default class LinearWithValueLabel extends React.Component {
    render() {

        return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <progress style={{width: "100%"}} value={this.props.progress} max={"100"} />
        </Box>
    );
    }







}
