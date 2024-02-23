# chord-finder-app

### Simple React guitar chord finder that uses the Uberchord API and manages state with useContext() and useReducer()

Users have the option of selecting chord key, quality, extension and bass values from dropdowns that are passed with action types to a reducer function before being stored in context as strings, then concatenated and passed to an Uberchord API call that renders chord diagrams based on the user's selections.
