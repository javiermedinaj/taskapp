export const TaskRow = ({ task, toggleTask }) => (
    <tr key={task.name}>
        <td className="d-flex justify-content-between">
            {task.name}
            <input
                type="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task)}
                className="form-check-input ms-5"
            />
        </td>
    </tr>
);


