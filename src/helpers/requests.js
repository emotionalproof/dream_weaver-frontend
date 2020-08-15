
const API_BASE = "http://localhost:3002/api/v1"

// export const getMaladies = () => fetch(`${API_BASE}/maladies`).then(res => res.json()).catch(console.alert)
// export const getRemedies = () => fetch(`${API_BASE}/remedies`).then(res => res.json()).catch(console.alert)
// export const fetchMalady = id => fetch(`${API_BASE}/maladies/${id}`).then(res => res.json()).catch(console.alert)
// export const fetchRemedy = id => fetch(`${API_BASE}/remedies/${id}`).then(res => res.json()).catch(console.alert)
// export const postRemedy = body => fetch(`${API_BASE}/remedies`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json'
//     },
//     body: JSON.stringify(body)
// }).then(res => res.json()).catch(console.alert)

export const checkLogin = username => fetch(`${API_BASE}/users/login/${username}`).then(resp => resp.json()).catch(console.alert)

export const postUser = user => fetch(`${API_BASE}/users`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(user)
}).then(resp => resp.json()).catch(console.alert)

export const postEntry = entry => fetch(`${API_BASE}/entries`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(entry)
}).then(resp => resp.json()).catch(console.alert)

export const getUser = id => fetch(`${API_BASE}/users/${id}`).then(resp => resp.json()).catch(console.alert)

export const patchEntry = (updateObj, updateId) => fetch(`${API_BASE}/entries/${updateId}`, {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    },
    body: JSON.stringify(updateObj)
}).then(resp => resp.json()).catch(console.alert)