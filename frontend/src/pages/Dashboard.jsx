import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid md:grid-cols-3 gap-4">
        <Card title="Plan Trip" desc="Create new itinerary" />
        <Card title="Explore" desc="Discover destinations" />
        <Card title="My Trips" desc="Manage saved trips" />
      </div>
    </div>
  );
}