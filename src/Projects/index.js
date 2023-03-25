import { Button, Loading } from "./styled";
import { useProjects } from "./useProjects";

export const Projects = () => {
  const { projects, renderProjects } = useProjects();

  return (
    <div>
      <Button onClick={renderProjects}>Kliknij i poznaj moje projekty.</Button>
      <Loading>{projects}</Loading>
    </div>
  );
};
