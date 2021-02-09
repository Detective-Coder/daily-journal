/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exported by the
 *    data provider component
 */
import { useJournalEntries, getEntries } from "./JournalDataProvider.js"
import { JournalEntryComponent } from "./JournalEntry.js"

// DOM reference to where all entries will be rendered

export const EntryListComponent = () => {
  let entryLog = document.querySelector("#entryLog")
  entryLog.innerHTML = "";
  getEntries().then(() => {
    // Use the journal entry data from the data provider component
    let entries = useJournalEntries()
    entries.forEach((singleEntry) => {
      entryLog.innerHTML += JournalEntryComponent(singleEntry);
    });
  })
   
}