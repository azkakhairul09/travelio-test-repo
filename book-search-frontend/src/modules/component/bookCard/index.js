import * as React from 'react';
import { Alert, Box, CardMedia, Snackbar } from '@mui/material'
import { getBooks } from '../../../function/apiGetBooks'
import SearchLayout from '../../layout/searchLayout';
import { styled } from '@mui/material/styles';
import empty from '../../../gif/empty.gif'
import BookLayout from '../../layout/bookLayout';

const CardList = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    margin: theme.spacing(4),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(2),
        width: 'auto',
    },
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center'
}));

const EmptyImage = styled(CardMedia)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    width: '100%',
    height: 'auto',
    margin: 'auto'
}));

const ImageContainer = styled(Box)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
    },
    width: '600px',
    height: 'auto',
    margin: 'auto'
}));

function BookCard() {
    const ref = React.useRef(null);
    const [value, setValue] = React.useState('')
    const [listBooks, setListBooks] = React.useState(null)
    const [timer, setTimer] = React.useState(null)
    const [state, setState] = React.useState({
        opens: false,
        message: null,
        severity: null
    });

    const { opens, message, severity } = state;

    const handleCloses = () => {
        setState({ ...state, opens: false });
    };

    function onChange(event) {
        setValue(event.target.value)
    }

    function findBooksWithKeywords(value) {
        if (value.length > 0) {
            getBooks(value).then(async res => {
                if (res) {
                    await setListBooks(res)
                } else {
                    setState({
                        opens: true,
                        message: "Kami tidak menemukan buku dengan kata kunci tersebut.",
                        severity: "error"
                    })
                }
            }).catch(e => (
                setListBooks(null)
            ))
        }
    }

    const inputChanged = (event) => {
        clearTimeout(timer)

        const newTimer = setTimeout(() => {
            findBooksWithKeywords(event.target.value)
        }, 600)

        setTimer(newTimer)
    }

    const isWishlistClicked = () => {
        setState({ ...state, opens: false });
        setTimeout(() => {
            setState({
                opens: true,
                message: "Buku ini berhasil ditambahkan ke wishlist Anda.",
                severity: "success"
            })
        }, 100);
    }

    const isFavoriteClicked = () => {
        setState({ ...state, opens: false });
        setTimeout(() => {
            setState({
                opens: true,
                message: "Buku ini berhasil ditambahkan menjadi buku favorit Anda.",
                severity: "success"
            })
        }, 100);
    }

    return (
        <>
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center', color: '#FFF' }} open={opens} autoHideDuration={2500} onClose={handleCloses}>
                <Alert onClose={handleCloses} severity={severity} sx={{ width: '350px', fontSize: '12px', fontFamily: 'Avenir' }}>
                    {message}
                </Alert>
            </Snackbar>
            <SearchLayout onChange={onChange} inputChanged={inputChanged} findBooksWithKeywords={findBooksWithKeywords} />
            <CardList>
                {listBooks && listBooks.map((obj, i) =>
                    <BookLayout key={i} obj={obj} isWishlistClicked={isWishlistClicked} isFavoriteClicked={isFavoriteClicked} ref={ref} bookUid={obj.id} />
                )}
            </CardList>
            <ImageContainer>
            {!listBooks &&
                <EmptyImage alt="empty page" component="img" src={empty} sx={{
                    width: '600px',
                    height: 'auto',
                    margin: 'auto'
                }} />
            }
            </ImageContainer>
        </>
    )
}

export default BookCard