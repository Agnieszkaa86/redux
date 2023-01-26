// Importujemy hook
import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
// Importujemy obiekt wartości filtra
import { statusFilters } from "../../redux/constans";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  // Otrzymujemy tablicę zadań ze statusu Redux
  const tasks = useSelector(state => state.tasks);
  // Otrzymujemy wartość filtra ze statusu Redux
  const statusFilter = useSelector(state => state.filters.status);
  // Obliczamy tablicę zadań, które należy wyświetlić w interfejsie
  const visibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className="task-list">
      {visibleTasks.map(task => (
        <li key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};