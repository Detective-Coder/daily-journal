/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
  return `
      <section id="entry--${entry.id}" class="journalEntry bg-light">
        <div class="border rounded overflow-hidden">
          <p>${entry.entry}</p>
          <p>${entry.date}</p>
        </div>
      </section>
  `
}