/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
    <div class="col-sm bg-light m-2">
      <section id="entry--${entry.id}" class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <p>${entry.entry}</p>
          <p>${entry.date}</p>
        </div>
      </section>
    </div>
  
  `
}