## What state we require in this application
- name : String - State related to adding cars
- cost : number - State related to adding cars
- searchTerm : String - State related to list of cars
- cars: Array - State related to list of cars

## Derived State (Use from the existing state)

- totalCost : number
- matchedCars: compare the entered name in search input and check for existed cars in the array

## How is the state changing over time?

- change Name
- change Cost
- change search term
- add car
- remove car

## Redux store design

- Identify what state exists in the app
- Identify how that state changes over time
- Group together common pieces of state
- Create slice for each group

