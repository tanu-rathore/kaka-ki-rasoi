export default function MenuItem({ name, price }) {
  return (
    <div className="flex justify-between items-center py-1 text-[#f5e6c8]">
      <span className="text-sm">{name}</span>
      <span className="text-sm font-semibold">₹{price}</span>
    </div>
  );
}
