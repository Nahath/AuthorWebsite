import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function MonstersBook2() {
  return (
    <>
      <Head>
        <title>Book Recommendations</title>
        <link href="https://fonts.cdnfonts.com/css/luminari" rel="stylesheet" />
      </Head>
      <div className="generalText">
        <h2>My Favorites</h2>
        <h3>
          <Link href="https://brandonsanderson.com">Brandon Sanderson</Link>
        </h3>
        <p>
          In my view, the best author writing today. If you somehow discovered
          me before you discovered Sanderson, then I'd give one of three
          recommendations based on your preference.
        </p>
        <ul>
          <li>
            If you liked my book and want more lighthearted middle grade work,
            read{" "}
            <Link href="https://www.brandonsanderson.com/alcatraz-vs-the-evil-librarians-series/">
              Alcatraz vs. the Evil Librarians
            </Link>
          </li>
          <li>
            If you want amazing, fast-paced epic fantasy, read{" "}
            <Link href="https://www.brandonsanderson.com/the-mistborn-saga-the-original-trilogy/">
              Mistborn
            </Link>
          </li>
          <li>
            If you can accept fantasy with a slower pace but a greater payoff,
            my favorite of his series begins with{" "}
            <Link href="https://www.brandonsanderson.com/the-stormlight-archive-series/">
              The Way of Kings
            </Link>
          </li>
          <li>Or almost any of his other books</li>
        </ul>
        <h3>
          <Link href="">Dragon Thief (Skystone Chronicles)</Link>
        </h3>
        <p>
          Funny, entertaining characters, great twists, but there's one truly
          remarkable thing about this book, which I will explain by talking
          about a cliche that plagues so many books.
        </p>
        <p>
          When a romance is told from a male's viewpoint, the woman treats him
          like garbage, but he's always the one apologizing. And somehow it's
          supposed to be showing deep love.
        </p>
        <p>
          Severe examples include Ready Player One, Wheel of Time, or the
          Dresden Files. Even Sanderson, who I just named above as "best" falls
          into this trap in most of his series, though at least it's usually
          more mild than most authors. Harry Potter almost avoids it, but it's
          still one-sided as Harry makes all the mistakes and Ginny does all the
          criticizing.
        </p>
        <p>
          Dragon Thief avoids this cliche 100%. The woman doesn't berate or
          insult him (maybe in jest...I can't remember). They actually enjoy
          each other's company--not because the book tells you so between
          negative interactions but because you actually read about them
          enjoying each other. I can actually believe that they're in love.
        </p>
        <p>
          That said, the romance is just a subplot, but it was nice to finally
          see it done well.
        </p>
        <h3>
          <Link href="https://www.amazon.com/Going-Postal-Discworld-Terry-Pratchett/dp/0060502932">
            Going Postal
          </Link>
        </h3>
        <p>
          Though I've only read a small portion of Terry Pratchet's work, this
          one is definitely my favorite. Clever humor that even manages to go
          into deep political principles without a hint of taking sides.
        </p>
        <h3>
          <Link href="https://www.amazon.com/Hard-Magic-Book-Grimnoir-Chronicles-ebook/dp/B00APAHLMA">
            Hard Magic (Larry Correia)
          </Link>
        </h3>
        <p>
          The start of my favorite Urban Fantasy series and my favorite of Larry
          Correia's work. One of the skills masterfully executed here is
          creating deep characters with strong personalities using very few
          words (probably the skill I most hope to develop myself). It's also a
          great execution of rule-based magic, where every problem solved by
          magic is done in a way that makes sense to the reader.
        </p>
        <br />
      </div>
    </>
  );
}
