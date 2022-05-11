import { backendurl, pathuri, wishlisturi } from "../../utility/Uri";

export const addWishlist = (parameter) => {
    return fetch(`${backendurl+pathuri+wishlisturi+parameter}`, {
        method: 'POST'
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