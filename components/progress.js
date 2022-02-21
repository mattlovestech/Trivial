import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

export default function LinearWithValueLabel() {
    const [progress, setProgress] = React.useState(1);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 1 : prevProgress + 1));
        }, 100);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <progress style={{width: "100%"}} value={progress} max={"100"} />
        </Box>
    );
}
