import FavoriteIconDefault from '@mui/icons-material/FavoriteBorderOutlined'
import FavoriteIcon from '@mui/icons-material/FavoriteOutlined'
import WishlistIconDefault from '@mui/icons-material/BookmarkBorderOutlined'
import WishlistIcon from '@mui/icons-material/BookmarkOutlined'
import { pink, grey } from '@mui/material/colors';
import { Box } from '@mui/material'
import React, { forwardRef, useEffect, useImperativeHandle } from 'react'
import { getWishlist } from '../../../function/apiGetWishlist';
import { getFavorite } from '../../../function/apiGetFavorite';
import { addWishlist } from '../../../function/apiSaveWishlist';
import { addFavorite } from '../../../function/apiSaveFavorite';

const WishlistBookCard = forwardRef((props, ref) => {

    const [isFavorite, setIsFavorite] = React.useState(false)
    const [isWishlist, setIsWishlist] = React.useState(false)

    const cleanValue = () => {
        setIsFavorite(false);
        setIsWishlist(false)
    };

    function wishlistCheck(value) {
        getWishlist(value).then(async res => {
            if (res && res.code == 200) {
                setIsWishlist(true)
            } else {
                setIsWishlist(false)
            }
        }).catch(e => (
            setIsWishlist(false)
        ))
    }

    function favoriteCheck(value) {
        getFavorite(value).then(async res => {
            if (res && res.code == 200) {
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }
        }).catch(e => (
            setIsFavorite(false)
        ))
    }

    useEffect(() => {
        wishlistCheck(props.bookUid)
        favoriteCheck(props.bookUid)
    }, [props.bookUid])
    

    useImperativeHandle(ref, () => {
        return {
            setIsFavorite: cleanValue
        }
    });

    function saveWishlist(value) {
        addWishlist(value).then(async res => {
            if (res && res.code == 200) {
                props.isWishlistClicked();
                setIsWishlist(true)
            } else {
                setIsWishlist(false)
            }
        }).catch(e => (
            setIsWishlist(false)
        ))
    }

    function saveFavorite(value) {
        addFavorite(value).then(async res => {
            if (res && res.code == 200) {
                props.isFavoriteClicked();
                setIsFavorite(true)
            } else {
                setIsFavorite(false)
            }
        }).catch(e => (
            setIsFavorite(false)
        ))
    }

    return (
        <Box sx={{
            display: 'flex'
        }}>
            <Box>
                {isWishlist ? <WishlistIcon sx={{ color: grey[700], cursor: 'pointer' }} /> : <WishlistIconDefault sx={{ cursor: 'pointer' }} onClick={() => { setIsWishlist(true); saveWishlist(props.bookUid) }} />}
            </Box>
            <Box>
                {isFavorite ? <FavoriteIcon sx={{ color: pink[500], cursor: 'pointer' }} /> : <FavoriteIconDefault sx={{ cursor: 'pointer' }} onClick={() => { setIsFavorite(true); saveFavorite(props.bookUid) }} />}
            </Box>
        </Box>
    )

})

export default WishlistBookCard