import { Link } from "react-router-dom";
const MainNavigation = () => {
  return <header>
      <div>React Meetup</div>
      <nav>
          <ul>
              <li>
                  <Link to='/'>All Meetups</Link>
              </li>
              <li>
                  <Link to='/new-meetuo'>Add New Meetups</Link>
              </li>
              <li>
                  <Link to='/favorites'>My Favorites</Link>
              </li>

          </ul>
      </nav>
  </header>;
};

export default MainNavigation;
