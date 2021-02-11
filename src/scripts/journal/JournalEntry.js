/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry, moodObject) => {
  return `
    <div class="col-sm bg-light m-2">
      <section id="entry--${entry.id}" class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <p>Concepts: ${entry.concept}</p>
          <p>Entry: ${entry.entry}</p>
          <p>Date: ${entry.date}</p>
          <p>Mood: ${moodObject.value}</p>
        </div>
      </section>
    </div>
  
  `
}