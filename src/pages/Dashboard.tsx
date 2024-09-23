import { useEffect, useState } from "react";
import { fetchUsers } from "../services/httpService";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchUsers();
      setUsers(response.data.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-2xl text-bold">Dashboard</h1>
      <ul>
        {users.map((user: any) => (
          <li key={user.id}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Dashboard;
