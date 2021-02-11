import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"
import {getMoods, useMoods} from "./MoodProvider.js"

// DOM reference to where all entries will be rendered

export const EntryListComponent = () => {
  let entryLog = document.querySelector("#entryLog")
  entryLog.innerHTML = "";
  getEntries()
  .then(getMoods)
  .then(() => {
    // Use the journal entry data from the data provider component
    let journalEntries = useJournalEntries()
    let moods = useMoods()
    // journalEntries.map((singleEntry) => {
    //   entryLog.innerHTML += JournalEntryComponent(singleEntry);
    // });
    journalEntries.forEach((singleEntry) => {
      const relatedMood = moods.find(mood => {
        return mood.id === +singleEntry.moodId
      })
      entryLog.innerHTML += JournalEntryComponent(singleEntry, relatedMood);
    })
  })
   
}