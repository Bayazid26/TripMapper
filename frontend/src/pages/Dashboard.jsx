// import Card from "../components/card";
// import MapView from "../components/MapView";
// export default function Dashboard() {
//   return (
//     <div className="p-6">
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

//       <div className="grid md:grid-cols-3 gap-4">
//         <Card title="Plan Trip" desc="Create new itinerary" />
//         <Card title="Explore" desc="Discover destinations" />
//         <Card title="My Trips" desc="Manage saved trips" />
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import API from "../api";

import Card from "../components/card";
import MapView from "../components/MapView";

export default function Dashboard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await API.get("/trips");
        setTrips(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTrips();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      {/* 🗺 MAP SECTION (ADD HERE) */}
      <div className="mb-6">
        <MapView trips={trips} />
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Plan Trip" desc="Create new itinerary" />
        <Card title="Explore" desc="Discover destinations" />
        <Card title="My Trips" desc="Manage saved trips" />
      </div>
    </div>
  );
}