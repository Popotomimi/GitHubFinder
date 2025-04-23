import { UserProps } from "../types/user";

import Search from "../components/Search";

import { useState } from "react";
import User from "../components/User";
import Error from "../components/Error";
import Loader from "../components/Loader";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoding, setIsLoding] = useState(false);

  const loadUser = async (userName: string) => {
    setIsLoding(true);
    setError(false);
    setUser(null);

    const res = await fetch(`https://api.github.com/users/${userName}`);

    const data = await res.json();

    setIsLoding(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const useData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(useData);
  };
  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoding && <Loader />}
      {user && <User {...user} />}
      {error && <Error />}
    </div>
  );
};

export default Home;
