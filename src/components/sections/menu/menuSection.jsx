import MenuItem from "./menuItems";

export default function MenuSection({ category, items }) {
  return (
    <div>
      <h3 className="font-serif text-xl text-[#f1dba6] mb-4 border-b border-[#f1dba6]/40 pb-2">
        {category}
      </h3>

      <div className="space-y-1">
        {items.map((item, index) => (
          <MenuItem key={index} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
}
