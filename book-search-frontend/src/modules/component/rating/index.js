import { Box } from '@mui/material'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

function Rating() {
    return (
        <Box>
            <Rater total={5} rating={2} interactive={false} />
        </Box>
    )
}

export default Rating