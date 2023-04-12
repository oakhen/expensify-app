import React from "react"
import { createRoot } from "react-dom/client"
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
} from "react-router-dom"
import "./styles/style.scss"
import configureStore from "./stores/configureStore"
import { addExpense } from "./actions/expenses"
import { Provider, Connect } from "react-redux"
// import { useSelector } from "react-redux";
import exenses from "./reducers/exenses"
import ExpenseList from "./components/playground/ExpenseList"
import ConnectExpenseList from "./components/playground/ExpenseList"
import TextFilterInput from "./components/playground/TextFilter"
import AddExpense from "./routes/AddExpense"
import EditExpense from "./routes/EditExpense"

/* Store */
const store = configureStore()
store.dispatch(
  addExpense({ description: "water bill", amount: 2000, createdAt: 3000 }),
)
store.dispatch(
  addExpense({ description: "gas bill", amount: 3000, createdAt: 4000 }),
)

const Home = () => (
  <div>
    <nav>
      <NavLink to="/">HOME</NavLink>
      <NavLink to="create">CREATE</NavLink>
      <NavLink to="edit">EXPENSE</NavLink>
      <NavLink to="help">Help</NavLink>
    </nav>

    <Outlet />

    <h1>Home</h1>
    <h3>welcome to my home </h3>
    <TextFilterInput />
    <ConnectExpenseList style="this dummy style" />

    <AddExpense />
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores incidunt
      ullam omnis odio sit officiis praesentium eveniet illum rerum. Amet
      aliquam corporis voluptatem beatae cum molestiae vitae a, id nihil.
    </p>
  </div>
)

const myrouts = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "create",
        element: <AddExpense />,
      },
      {
        path: "edit",
        element: <EditExpense />,
        children: [
          {
            path: ":id",
            element: <p>hello</p>,
          },
        ],
      },
      {
        path: "help",
        element: <EditExpense />,
      },
    ],
  },
])

const App = () => (
  <div>
    <RouterProvider router={myrouts} />
  </div>
)
createRoot(document.querySelector("#root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
