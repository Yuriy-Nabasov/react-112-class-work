import { useEffect, useState } from 'react';
import { useParams, NavLink, Outlet } from 'react-router';
import { fetchUserById } from '../userService';
import UserInfo from '../components/UserInfo/UserInfo';

export default function UserDatailsPage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        setError(false);
        const data = await fetchUserById(userId);
        setUser(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getUser();
  }, [userId]);
  // console.log(params);
  return (
    <div>
      {isLoading && <b>Loading users...</b>}
      {error && <b>Whoops there was an error, plz reload the page...</b>}
      {user && <UserInfo user={user} />}
      {/* // UserDatailsPage - {userId} */}
      <ul>
        <li>
          <NavLink to="posts">Posts</NavLink>
        </li>
        <li>
          <NavLink to="todos">Todos</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
