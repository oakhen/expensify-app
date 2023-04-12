import { addExpense, editExpense, removeExpense } from "../actions/expenses"

test("should setup remove expense action object", () => {
  const action = removeExpense({
    id: "abc123",
  })

  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "abc123" })
})

test("should setup editExpense action object", () => {
  const action = editExpense("abc123", { note: "new note value", amount: 3400 })
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "abc123",
    update: {
      note: "new note value",
      amount: 3400,
    },
  })
})

test("should setup addExpense action object with provided values", () => {
  const expenseData = {
    description: "test",
    note: "test",
    amount: 1,
    createdAt: 1000,
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String),
    },
  })
})

test("should create addExpense action object with no value", () => {
  const defaultValues = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0,
  }

  const action = addExpense()
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...defaultValues,
      id: expect.any(String),
    },
  })
})
