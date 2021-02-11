let entries = []
/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
// export const useJournalEntries = () => {
//   const sortedByDate = journal.sort(
//       (currentEntry, nextEntry) =>
//           Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
//   )
//   return sortedByDate
// }

export const useJournalEntries = () => entries.slice()

export const getEntries = () => {
  return fetch("http://localhost:8088/entries?_expand=mood")
    .then(response => response.json())
    .then(parsedEntries => {
      entries = parsedEntries
    })
}

export const saveEntry = entry => {
  return fetch("http://localhost:8088/entries?_expand=mood", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  })
  .then(getEntries)
}