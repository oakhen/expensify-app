const getVisibleExpense = (expeseses, { text, sortBy, startDate, endDate }) =>
  expeseses
    .filter((expense) => {
      const startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate
      const endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate

      const textMatch =
        typeof text !== "string" ||
        expense.description.toLowerCase().includes(text.toLowerCase())

      return startDateMatch && endDateMatch && textMatch
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1 //recent first or later first
      }
      if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1
      }
    })

export default getVisibleExpense
