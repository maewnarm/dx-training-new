import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div>
      <main className="home-main">
        <h1>In main</h1>
      </main>
      <button className="custom-button">Theme color</button>
      <section className="main-section">
        <section className="main-section__topic">Topic</section>
        <div className="main-section__subtopic">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, minus.
        </div>
        <div className="main-section__subtopic main-section__subtopic--modified">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, minus.
        </div>
        <div className="main-section__subtopic main-section__subtopic--bold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod, minus.
        </div>
      </section>

      <footer></footer>
    </div>
  );
};

export default Home;
