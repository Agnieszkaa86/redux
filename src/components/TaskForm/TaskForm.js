// Importujemy hook
import { useDispatch } from "react-redux";
// Importujemy generator akcji 
import { addTask } from "../../redux/actions";

export const TaskForm = () => {
  // Otrzymujemy odnośnik do funkcji wysyłania
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    // Wywołujemy generator akcji i przekazujemy tekst zadania dla payload
    // Wysyłamy wynik – akcję utworzenia zadania
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <button type="submit">Add task</button>
    </form>
  );
};