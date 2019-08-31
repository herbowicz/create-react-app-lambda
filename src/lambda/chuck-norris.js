

import axios from "axios"
export async function handler(event, context) {
    try {
        const response = await axios.get("https://api.chucknorris.io/jokes/random", { headers: { Accept: "application/json" } })
        const data = response.data
        return {
            statusCode: 200,
            body: JSON.stringify({ msg: data.value })
        }
    } catch (err) {
        console.log(err)
        return {
            statusCode: 500,
            body: JSON.stringify({ msg: err.message })
        }
    }
}
