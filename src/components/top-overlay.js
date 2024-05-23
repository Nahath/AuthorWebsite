import Link from "next/link";

export default function TopOverlay() {
  return (
    <div className="bookBackground">
      <h1>
        <Link className="nonFormatted" href="/">
          Joshua McDonald
        </Link>
      </h1>
    </div>
  );
}
