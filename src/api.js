const BASE_ENDPOINT = 'https://5fd7e59c9dd0db0017ee9d3c.mockapi.io/api/v1/button-state/1'


export const ServerAPI = {

    getData: async () => {
        const data = await fetch(BASE_ENDPOINT)
        return data.json()
    },


    putState: async (body) => {
        const response = await fetch(BASE_ENDPOINT, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
            credentials: "same-origin"
        })
        return response
    }


}