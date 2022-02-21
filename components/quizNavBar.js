import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";

export default function QuizNavBar() {


    return (
        <Stack  style={{background: "rgba(0,0,0,0.3)", color: "white", borderRadius: "25px", paddingRight: "10px"}} direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={2}>
            <Avatar alt="Remy Sharp" src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/atlanta-georgia-downtown-city-skyline-cavan-images.jpg" />
            <h3>Insert Quiz Name</h3>
            <MoreHorizIcon/>
        </Stack>
    );
}