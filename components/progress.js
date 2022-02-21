import * as React from 'react';
import Box from '@mui/material/Box';



export default function LinearWithValueLabel() {
    const [progress, setProgress] = React.useState(1);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 1 : prevProgress + 1));
        }, 50);
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
