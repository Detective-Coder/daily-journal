import {saveEntry} from "./JournalDataProvider.js"
import {EntryListComponent} from "./JournalEntryList.js"

// this is where we're printing the form
const contentTarget = document.querySelector("#form-container")



// this function contains the form where we get all the information that we want to save to our .json api
export const EntryForm = () => {
    contentTarget.innerHTML = `
      <div class="bg-light p-5 mb-5">
        <div class="mb-3 col-sm-5">
          <label for="date" class="form-label">Date of Entry</label>
          <input type="date" class="form-control" id="date">
        </div>
        <div class="mb-3 col-sm-8">
          <label for="concepts" class="form-label">Concepts Covered</label>
          <input type="text" class="form-control" id="concepts">
        </div>
        <div class="mb-3">
          <label for="textarea" class="form-label">Journal Entry</label>
          <textarea class="form-control" id="textarea" rows="3"></textarea>
        </div>
      
        <fieldset class="row mb-3">
          <legend class="col-form-label col-sm-2 pt-0">Mood</legend>
          <div class="col-sm-10">
            <div class="form-check form-check-inline">
              <input id="mood" class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
              <label class="form-check-label" for="gridRadios1">
                Happy
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
              <label class="form-check-label" for="gridRadios2">
                Neutral
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
              <label class="form-check-label" for="gridRadios3">
                Sad
              </label>
            </div>
          </div>
        </fieldset>

        <button type="submit" id="saveEntry" class="btn btn-primary d-block mt-4">Record Journal Entry</button>
      </div>
    `
}

// getting a reference to the main element
const eventHub = document.querySelector("#form-container")
// if there's a click event in the main element, we run this function with clickEvent as the parameter
eventHub.addEventListener("click", clickEvent => {
  // if what the user clicked on has the id of saveNote... which is the button that saves the info...
  if (clickEvent.target.id === "saveEntry") {
    
      // Make a new object representation of a note, this seems to be the object with the info that we want to get and save into the local api, stored in a variable
      let newEntry = {
          // Key/value pairs here
          "date": document.querySelector("#date").value,
          "concept": document.querySelector("#concepts").value,
          "entry": document.querySelector("#textarea").value,
          "mood": document.querySelector("#mood").value
      }
      console.log(newEntry)

      // Change API state and application state, we're calling the saveNote function - which takes in the info from the argument of newNote and writes it to the local api, then we're calling the NoteList function, which I believe just gets everything again
      saveEntry(newEntry)
      .then(EntryListComponent) // Refresh your list of notes once you've saved your new one
      console.log(newEntry)
  }
})