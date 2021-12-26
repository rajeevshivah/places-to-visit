import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Krishna",
      image:
        "https://static.statusqueen.com/mobilewallpaper/thumbnail/Magical_Krishna-156.jpg",
      places: 3,
    },
    {
      id: "u2",
      name: "Rajeev",
      image:
        "https://scontent.fvns4-1.fna.fbcdn.net/v/t39.30808-6/258244358_4901254089892900_2473912617052178270_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=amwaTrKW-C0AX8ECqpZ&_nc_oc=AQl_apHObo_MWIIy5ibwIGZB_tMzHkOMAWCoEGelTLPkpqgkun3TjR6gFQYURjrfYoo&_nc_ht=scontent.fvns4-1.fna&oh=00_AT-EOhLnINgeA9oufRw6sRVC5_h23kEMGhmxfKO87kRTjA&oe=61CCC7DF",
      places: 2,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
