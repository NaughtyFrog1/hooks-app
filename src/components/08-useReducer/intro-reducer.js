const initialState = [
  {
    id: 1,
    desc: 'Aprender React',
    done: false,
  },
]

const miReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    default:
      throw new Error(`'${action.type}' is not a valid action`)
  }
}

let todos = miReducer()

const newTodo = {
  id: 2,
  desc: 'Dormir',
  done: false,
}

const action = {
  type: 'add',
  payload: newTodo,
}

todos = miReducer(todos, action)

console.log(todos)

/*
En el reducer se manda un state y un action. Por defecto siempre devolvemos un state, aunque no hagamos nada

Cuando trabajamos con reducer por convención las propiedades del action son 
  - type El tipo de acción a realizar
  - payload nueva información con la que queremos trabajar
*/
  