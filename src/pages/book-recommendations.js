import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import alcatraz from "../../public/images/Alcatraz.jpg";
import mistborn from "../../public/images/Mistborn.png";
import stormlight from "../../public/images/Way-of-Kings.jpg";
import dragonThief from "../../public/images/Dragon-Thief.jpg";
import goingPostal from "../../public/images/Going-Postal.jpg";
import hardMagic from "../../public/images/Hard-Magic.jpg";

export default function BookRecommendations() {
  return (
    <>
      <Head>
        <title>Book Recommendations</title>
      </Head>
      <div className="topSection">
        <h1>My Favorites</h1>
        <div className="book-recommendation">
          <h3>
            <Link href="https://brandonsanderson.com">Brandon Sanderson</Link>
          </h3>
          <p>
            In my view, the best author writing today. If you somehow discovered
            me before you discovered Sanderson, then I'd give one of three
            recommendations based on your preference.
          </p>
          <br />
          <ul>
            <li key="Alcatraz">
              <Link href="https://www.brandonsanderson.com/alcatraz-vs-the-evil-librarians-series/">
                <Image alt="Alcatraz" src={alcatraz} />
              </Link>
              If you liked my book and want more lighthearted middle grade work,
              read &nbsp;
              <Link href="https://www.brandonsanderson.com/alcatraz-vs-the-evil-librarians-series/">
                Alcatraz vs. the Evil Librarians
              </Link>
            </li>
            <li key="Mistborn">
              <Link href="https://www.brandonsanderson.com/the-mistborn-saga-the-original-trilogy/">
                <Image alt="Mistborn" src={mistborn} />
              </Link>
              If you want amazing, fast-paced epic fantasy, read &nbsp;
              <Link href="https://www.brandonsanderson.com/the-mistborn-saga-the-original-trilogy/">
                Mistborn
              </Link>
            </li>
            <li key="Stormlight">
              <Link href="https://www.brandonsanderson.com/the-stormlight-archive-series/">
                <Image alt="Stormlight" src={stormlight} />
              </Link>
              If you can accept fantasy with a slower pace but a greater payoff,
              my favorite of his series begins with &nbsp;
              <Link href="https://www.brandonsanderson.com/the-stormlight-archive-series/">
                The Way of Kings
              </Link>
            </li>
            <li clear="catchAll">Or almost any of his other books.</li>
          </ul>
          <br />
          <h3>
            <Link href="https://www.skystonechronicles.com/">
              Dragon Thief (Skystone Chronicles)
            </Link>
          </h3>
          <p>
            <Link href="https://www.skystonechronicles.com/">
              <Image alt="Dragon Thief" src={dragonThief} />
            </Link>
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
            Severe examples from books I otherwise like include Ready Player
            One, Wheel of Time, or the Dresden Files. Even Sanderson, who I just
            named above as "best" falls into this trap in most of his series,
            though at least it's usually more mild than most authors. Harry
            Potter almost avoids it, but it's still one-sided as Harry makes all
            the mistakes and Ginny does all the criticizing.
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
          <br />
          <h3>
            <Link href="https://www.amazon.com/Going-Postal-Discworld-Terry-Pratchett/dp/0060502932">
              Going Postal
            </Link>
          </h3>
          <p>
            <Link href="https://www.amazon.com/Going-Postal-Discworld-Terry-Pratchett/dp/0060502932">
              <Image alt="Going Postal" src={goingPostal} />
            </Link>
            Though I've only read a small portion of Terry Pratchet's work, this
            one is definitely my favorite. Clever humor that even manages to go
            into deep political principles without a hint of taking sides.
          </p>
          <br />
          <br />
          <br />
          <h3>
            <Link href="https://www.amazon.com/Hard-Magic-Book-Grimnoir-Chronicles-ebook/dp/B00APAHLMA">
              Hard Magic (Larry Correia)
            </Link>
          </h3>
          <p>
            <Link href="https://www.amazon.com/Hard-Magic-Book-Grimnoir-Chronicles-ebook/dp/B00APAHLMA">
              <Image alt="Hard Magic" src={hardMagic} />
            </Link>
            The start of my favorite Urban Fantasy series and my favorite of
            Larry Correia's work. One of the skills masterfully executed here is
            creating deep characters with strong personalities using very few
            words (probably the skill I most hope to develop myself). It's also
            a great execution of rule-based magic, where problems solved by
            magic are done in a way that makes sense to the reader.
          </p>
          <br />
        </div>
      </div>
    </>
  );
}
