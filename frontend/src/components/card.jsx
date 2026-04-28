export default function Card({ title, desc }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition">
      <h2 className="font-semibold text-lg mb-2">{title}</h2>
      <p className="text-gray-500">{desc}</p>
    </div>
  );
}