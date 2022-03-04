import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Stack from "@mui/material/Stack";

export default function QuizNavBar({quizName}) {


    return (
        <Stack  style={{background: "rgba(0,0,0,0.3)", color: "white", borderRadius: "25px", paddingRight: "10px"}} direction="row"
                justifyContent="space-between"
                alignItems="center" spacing={2}>
            <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1273675768388882432/cNaFCbrS_400x400.jpg" />
            <h5><small>{quizName}</small></h5>
            <MoreHorizIcon/>
        </Stack>
    );
}