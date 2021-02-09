/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
// const journal = [
//   {
//       id: 1,
//       date: "07/24/2025",
//       concept: "HTML & CSS",
//       entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//       mood: "Neutral"
//   },
//   {
//       id: 2,
//       date: "07/24/2025",
//       concept: "HTML & CSS",
//       entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
//       mood: "Ok"
//   },
//   {
//       id: 3,
//       date: "01/14/2021",
//       concept: "HTML & JavaScript",
//       entry: "We talked about components and creating objects.",
//       mood: "Neutral"
//   },
//   {
//       id: 4,
//       date: "01/15/2021",
//       concept: "HTML & JavaScript",
//       entry: "We learned about using JavaScript to print to the DOM.",
//       mood: "Happy"
//   },
//   {
//       id: 5,
//       date: "01/19/2021",
//       concept: "HTML & JavaScript",
//       entry: "We learned about using JavaScript to print HTML snippets to the DOM.",
//       mood: "Happy"
//   }
// ];

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
export const useJournalEntries = () => {
  return entries.slice()
}

export const getEntries = () => {
  return fetch("http://localhost:8088/entries")
    .then(response => response.json)
    .then(function (parsedEntries) {
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
}