import CardPreview from "../../components/CardPreview.tsx";

const Tasks: React.FC = () => {
  return (
    <div className={"p-5"}>
      <h1 className={"text-white text-3xl font-bold"}>View and Edit Tasks</h1>
      <p>
        View all your current tasks and add new tasks.
      </p>

      <br />

      <div className={"flex flex-col gap-5"}>
        <CardPreview link={"/tasks/create"} title={"Add"} description={"Create a new repeating task."}
                     icon={"library_add"} />
        <CardPreview link={"/"} title={"Modify"} description={"Modify or delete an existing task."} icon={"build"} />
        <CardPreview link={"/tasks/pool"} title={"Pool"} description={"View the pool of existing tasks."}
                     icon={"lists"} />
      </div>

    </div>
  );
};

export default Tasks;