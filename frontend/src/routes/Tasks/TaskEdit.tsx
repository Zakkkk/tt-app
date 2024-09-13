import { NotificationContainer, useNotification } from "../../components/Notification/Notification.tsx";
import Button from "../../components/Button.tsx";
import { Link } from "react-router-dom";

const TaskEdit: React.FC = () => {
  const { showNotification, notifications } = useNotification();

  return (
    <>
      <NotificationContainer notifications={notifications} />
      <div className={"p-5"}>
        <Link to={"/tasks"}>
          <Button>
            <span className={"material-symbols-outlined text-white"}>arrow_back</span>
            Back
          </Button>
        </Link>
        <br /> <br />
        <h1 className={"text-3xl font-bold text-white"}>Modify Repeating Tasks</h1>
      </div>
    </>
  );
};

export default TaskEdit;