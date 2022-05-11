import { Box, CardMedia, styled } from "@mui/material"

const ImageContainer = styled(Box)(({ theme }) => ({
    width: '160px',
    height: '230px',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
        width: '110px',
        height: '180px'
    },
}));

function ImagePreviewCard(props) {
    return (
        <ImageContainer sx={{
        }}>
            <CardMedia alt={props.title} component="img" src={props.thumbnail} sx={{
                maxHeight: '230px'
            }} />
        </ImageContainer>
    )
}

export default ImagePreviewCard