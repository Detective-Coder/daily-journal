/*
 *   Journal data provider for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
  {
      id: 1,
      date: "07/24/2025",
      concept: "HTML & CSS",
      entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
      mood: "Ok"
  },
  {
    id: 2,
    date: "07/26/2025",
    concept: "Complex Flexbox",
    entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
    mood: "Sad"
  },
  {
    id: 3,
    date: "07/27/2025",
    concept: "Adding a Functional Associates Button",
    entry: "This time I had to add a button to each criminal that makes their known associates and alibis appear somewhere on the screen.",
    mood: "Neutral"
  },
  {
    id: 4,
    date: "07/28/2025",
    concept: "Filtering Data",
    entry: "I had to set up a dropdown so that it only returned criminal objects that matched the value of what the user selects from the list.",
    mood: "Neutral"
  },
  {
    id: 5,
    date: "07/29/2025",
    concept: "Printing to the DOM",
    entry: "It's hard to think about all the different components that need to communicate with each other.",
    mood: "Neutral"
  }

]

/*
  You export a function that provides a version of the
  raw data in the format that you want
*/
export const useJournalEntries = () => {
  const sortedByDate = journal.sort(
      (currentEntry, nextEntry) =>
          Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
  )
  return sortedByDate
}