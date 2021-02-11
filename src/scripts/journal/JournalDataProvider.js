let entries = []
let moods = []
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
export const useMoods = () => moods.slice()

export const getMoods = () => {
  return fetch("http://localhost:8088/mood")
    .then(response => response.json())
    .then(parsedMoods => {
      moods = parsedMoods
    })
}

export const useJournalEntries = () => entries.slice()

export const getEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedEntries => {
      entries = parsedEntries
    })
}

export const saveEntry = entry => {
  return fetch("http://localhost:8088/entries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(entry)
  })
  .then(getEntries)
}