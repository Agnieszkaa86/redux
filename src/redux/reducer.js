import { statusFilters } from "./constans";

const initialState = {
  tasks: [],
  filters: {
    status: statusFilters.all,
  },
};

export const rootReducer = (state = initialState, action) => {
  // Reducer realizuje akcje po wartości właściwości type
  switch (action.type) {
    // W zależności od rodzaju akcji będzie się wykonywała inna logika
    case "tasks/addTask": {
      // Należy zwrócić nowy obiekt statusu
      return {
        // w którym są wszystkie dane istniejącego statusu
        ...state,
        // i nowa tablica zadań
        tasks: [
          // w której są wszystkie istniejące zadania
          ...state.tasks,
          // i obiekt nowego zadania
          action.payload,
        ],
      };
    }
    case "tasks/deleteTask":
      return{
      ...state,
  tasks: state.tasks.filter((task) => task.id !== action.payload)
  }
    default:
      // Każdy reducer otrzymuje wszystkie akcje wysłane do store.
      // Jeśli reducer nie powinien opracowywać jakiegoś typu akcji,
      // należy zwrócić istniejący status bez zmian.
      return state;
  }
};