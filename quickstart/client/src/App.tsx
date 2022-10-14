import { useEffect, useState } from "react";
import { trpc } from "./utils/trpc";

type User = {
  id: string;
  name: string;
};

function App() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await trpc.userById.query("1");
      if (response) {
        setUser(response);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>Hello, world!</div>
      <div>{user && user.name}</div>
    </div>
  );
}

export default App;
