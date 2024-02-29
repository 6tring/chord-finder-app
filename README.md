# chord-finder-app

### React guitar chord finder app that uses the Uberchord API and manages React state with useContext() and useReducer()

Users have the option of selecting chord key, quality, extension and bass values from dropdowns that are passed with action types to a reducer function before being stored in context as strings, then concatenated and passed to an Uberchord API call that renders chord diagrams based on the user's selections.

The deployed build version can be viewed at https://chord-finder-app.peterciluzzi.dev