import { baseurl, getbooks } from "../../utility/Uri";

export const getBooks = (parameter) => {
    return fetch(`${baseurl+getbooks}?q=${parameter}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then((res) => {
        if (res) {
            return res.items
        } else {
            return null
        }
    })
    .catch((e) => {
        return null
    })
}