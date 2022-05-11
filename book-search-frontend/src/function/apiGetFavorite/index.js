import { backendurl, favoriteuri, pathuri } from "../../utility/Uri";

export const getFavorite = (parameter) => {
    return fetch(`${backendurl+pathuri+favoriteuri+parameter}`, {
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