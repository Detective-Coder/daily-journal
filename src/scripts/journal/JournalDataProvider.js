// empty array to store the entries we get back from the api fetch call
let entries = []
// the function we call to use the journal entries in another module
export const useJournalEntries = () => entries.slice()
// the function that gets the entries from the api
export const getEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood") //get the entries
    .then(response => response.json()) //turn them into json we can use
    .then(parsedEntries => { 
      entries = parsedEntries //store the results in the global entries variable
    })
}
// the function we call to save a new entry to the api
export const saveEntry = entry => {
  return fetch("http://localhost:8088/entries?_expand=mood", { //connect to the api
    method: "POST", //use post instead of get to post a new entry to the api
    headers: { 
      "Content-Type": "application/json" //required for some reason
    },
    body: JSON.stringify(entry) //required
  })
  .then(getEntries) //run the getEntries function again so we refresh them with our new entry added
}