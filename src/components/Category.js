import {NavLink, Outlet, useParams} from "react-router-dom";
import {getCategory} from "../api";

export default function Category() {
    const params = useParams()
    const data = getCategory(params?.catId ?? "")

  return (
    <>
      <h2>{data?.name}</h2>
      <ul className={"session-list"}>
          {data?.sessions.map(session => (
              <li className={"session"} key={session.id}>
                  <NavLink to={session.id} className={({isActive})=> isActive ? "session-active" : null}>
                  <p className={"session-name"}>{session.name}</p>
                  <p>
                      {session.speaker.name} | {session.speaker.org}
                  </p>
              </NavLink>
              </li>
          ))}
          </ul>
        <Outlet/>
    </>
  );
}