const baseURL = 'http://localhost:3000/api/decks/'

export default {

  getDecks() {
    return fetch(baseURL)
    .then(res => res.json())
  },

  updateDeck(id, payload) {
    return fetch(baseURL + id, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
    })
    .then(res => res.json())
  },

  postDeck(payload){
     return fetch(baseURL, {
       method: 'POST',
       body: JSON.stringify(payload),
       headers: { 'Content-Type': 'application/json'}
     })
     .then(res => res.json())
   },

}
