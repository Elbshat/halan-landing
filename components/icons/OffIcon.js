function OffIcon({ amount }) {
  return (
    <span className="py-2 px-6 rounded-full -rotate-12 text-2xl leading-[1.1] bg-primary text-white font-extrabold">
      {amount}%<br />
      OFF
    </span>
  );
}

export default OffIcon;
