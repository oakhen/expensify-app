Summary

    Redux apps use plain JS objects, arrays, and primitives as the state values
        The root state value should be a plain JS object
        The state should contain the smallest amount of data needed to make the app work
        Classes, Promises, functions, and other non-plain values should not go in the Redux state
        Reducers must not create random values like Math.random() or Date.now()
        It's okay to have other state values that are not in the Redux store (like local component state) side-by side with Redux
    Actions are plain objects with a type field that describe what happened
        The type field should be a readable string, and is usually written as 'feature/eventName'
        Actions may contain other values, which are typically stored in the action.payload field
        Actions should have the smallest amount of data needed to describe what happened
    Reducers are functions that look like (state, action) => newState
        Reducers must always follow special rules:
            Only calculate the new state based on the state and action arguments
            Never mutate the existing state - always return a copy
            No "side effects" like AJAX calls or async logic
    Reducers should be split up to make them easier to read
        Reducers are usually split based on top-level state keys or "slices" of state
        Reducers are usually written in "slice" files, organized into "feature" folders
        Reducers can be combined together with the Redux combineReducers function
        The key names given to combineReducers define the top-level state object keys

pure functions:

##1.The output will solely be determined by input. for same input we get same output.
Just like mathematical function.

##2.Does not modify any state outside of its scope. iska koi side effect nai hona chaiye jo.
kisi v function ke kisi v state ko affect kare.

actions and states should be immutable:

###nothing should change or touch the sate or actions. action and state should me read only reducer will provid a new copy of state but will not change action or state

<!-- silly me:
hum totally bhul ckuke the ki hum jab call function dalte hai to bas uska kewal refrence hi dalte hai  -->

<!-- regular expression   -->
