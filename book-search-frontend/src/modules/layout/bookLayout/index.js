import { styled } from '@mui/material/styles';
import ImagePreviewCard from '../../component/previewImageCard';
import FooterBookCard from '../../component/footerBookCard';
import { forwardRef } from 'react';

const Book = styled('div')(({ theme }) => ({
    borderRadius: '10px',
    boxShadow: '0 0 10px rgb(229 229 229 / 80%)',
    height: '100%'
}));

const BookContainer = styled('div')(({ theme }) => ({
    width: '200px',
    height: '100%',
    padding: '10px 8px',
    [theme.breakpoints.down('sm')]: {
        width: '150px'
    },
}));

const BookLayout = forwardRef((props, ref) => {
    return (
        <BookContainer>
            <Book>
                <ImagePreviewCard subtitle={props.obj.volumeInfo.title} thumbnail={props.obj.volumeInfo.imageLinks ? props.obj.volumeInfo.imageLinks.thumbnail : null} />
                <FooterBookCard authors={props.obj.volumeInfo.authors ? props.obj.volumeInfo.authors : []} title={props.obj.volumeInfo.title} isWishlistClicked={props.isWishlistClicked} isFavoriteClicked={props.isFavoriteClicked} bookUid={props.bookUid} ref={ref} />
            </Book>
        </BookContainer>
    )
})

export default BookLayout