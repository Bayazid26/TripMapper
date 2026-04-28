import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MapView({ trips }) {
  return (
    <MapContainer
      center={[23.8103, 90.4125]} // Dhaka default
      zoom={6}
      style={{ height: "400px", width: "100%", borderRadius: "12px" }}
    >
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {trips.map((trip) => {
        if (!trip.lat || !trip.lng) return null;

        return (
          <Marker key={trip._id} position={[trip.lat, trip.lng]}>
            <Popup>
              <b>{trip.destination}</b>
              <br />
              Budget: {trip.budget}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}