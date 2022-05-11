import { backendurl, pathuri, wishlisturi } from "../../utility/Uri";

export const getWishlist = (parameter) => {
    return fetch(`${backendurl+pathuri+wishlisturi+parameter}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then((res) => {
        if (res) {
            return res
        } else {
            return null
        }
    })
    .catch((e) => {
        return null
    })
}