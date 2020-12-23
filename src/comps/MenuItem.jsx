function MenuItem({ label, src, active }) {
  return (
    <a
      href="/"
      className="block relative box-content pl-10 mb-3 text-gray-800 text-lg tracking-wide hover:bg-gray-100 py-1"
    >
      {active && (
        <div className="absolute w-1 h-full inset-0 bg-blue-600"></div>
      )}
      {src && <img src={src} alt="" srcset="" />}
      <span>{label}</span>
    </a>
  );
}

export default MenuItem;
