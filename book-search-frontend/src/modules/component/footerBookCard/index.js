
import { Box } from '@mui/material'
import { forwardRef, useState } from 'react'
import Rating from '../rating'
import WishlistBookCard from '../wishlistBookCard'

const FooterBookCard = forwardRef((props, ref) => {
    return (
        <>
            <Box sx={{
                padding: '0 8px',
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: '4px'
            }}>
                {props.authors.length > 0
                    ?
                    <>
                        {props.authors.map((name, i) =>
                            <span key={i} style={{
                                fontSize: "12px",
                                fontWeight: 400,
                                fontStyle: "normal",
                                fontStretch: "normal",
                                letteSpacing: "normal",
                                lineHeight: '12px',
                                color: "#6d6d6d",
                                whiteSpace: "nowrap",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                            }}>{(i ? ', ' : '') + name}</span>
                        )}
                    </>
                    :
                    <p style={{
                        fontSize: "12px",
                        fontWeight: 400,
                        fontStyle: "normal",
                        fontStretch: "normal",
                        letteSpacing: "normal",
                        lineHeight: '12px',
                        color: "#6d6d6d",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                    }}></p>
                }

            </Box>
            <Box sx={{
                padding: '0 8px',
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                marginBottom: '4px'
            }}>
                <span style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontStretch: "normal",
                    letteSpacing: "normal",
                    lineHeight: '12px',
                    color: "#151515",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }}>
                    {props.title}
                </span>
            </Box>
            <Box sx={{
                padding: '0 8px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Rating />
                <WishlistBookCard isWishlistClicked={props.isWishlistClicked} isFavoriteClicked={props.isFavoriteClicked} bookUid={props.bookUid} ref={ref} />
            </Box>
        </>
    )
})

export default FooterBookCard