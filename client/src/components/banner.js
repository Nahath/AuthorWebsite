import Link from "next/link";

export default function Banner() {
  return (
    <div className="banner">
      <Link className="nonFormatted" href="/">
        Joshua
        <br />
        <span className="negativeTopMargin">McDonald</span>
      </Link>
    </div>
  );
}
