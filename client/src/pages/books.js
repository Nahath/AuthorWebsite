import Pitch from "../components/pitch";
import Link from "next/link";

export default function Books() {
  return (
    <>
      <Pitch />
      <div className="generalText">
        <h2>Monsters Book 2</h2>
        <p>
          In progress. For more information, see the dedicated page{" "}
          <Link href="monsters-book-2">here</Link>
        </p>
        <h2>Razir's Hand (Unpublished)</h2>
        <p>
          A story of an eccentric genius working to undermine a conspiracy that
          he used to be part of.
        </p>
        <p>
          I wrote this prior to I Like Monsters, and am not yet decided on
          whether to release it. Depending on the success of my current work I
          will decide some time in the future.
        </p>
      </div>
      <br />
    </>
  );
}
