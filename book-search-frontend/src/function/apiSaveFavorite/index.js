import { backendurl, favoriteuri, pathuri } from "../../utility/Uri";

export const addFavorite = (parameter) => {
    return fetch(`${backendurl+pathuri+favoriteuri+parameter}`, {
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