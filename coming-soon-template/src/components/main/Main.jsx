import "./_main.scss";

const ImgCard = (props) => {
  function typeOne() {
    return (
      <div className="content__card">
        <p>{props.caption}</p>
        <img
          src={props.href}
          alt=""
        />
      </div>
    );
  }

  function typeTwo() {
    return (
      <div className="content__card">
        <img
          src={props.href}
          alt=""
        />
        <p>{props.title}</p>
        <p>{props.caption}</p>
        <p>{props.content}</p>
        <button>Contact</button>
      </div>
    );
  }

  return props.type == "one" ? typeOne() : typeTwo();
};

const Main = () => {
  return (
    <main className="content">
      <article className="content__project">
        <p>Projects</p>
        <section className="content__wrapper">
          <ImgCard
            caption={"Summer House"}
            href={"https://www.w3schools.com/w3images/house5.jpg"}
            type={"one"}
          />
          <ImgCard
            caption={"Brick House"}
            href={"https://www.w3schools.com/w3images/house2.jpg"}
            type={"one"}
          />
          <ImgCard
            caption={"Renovated"}
            href={"https://www.w3schools.com/w3images/house3.jpg"}
            type={"one"}
          />
          <ImgCard
            caption={"Barn House"}
            href={"https://www.w3schools.com/w3images/house4.jpg"}
            type={"one"}
          />
        </section>

        <section className="content__wrapper">
          <ImgCard
            caption={"Summer House"}
            href={"https://www.w3schools.com/w3images/house2.jpg"}
            type={"one"}
          />
          <ImgCard
            caption={"Brick House"}
            href={"https://www.w3schools.com/w3images/house5.jpg"}
            type={"one"}
          />

          <ImgCard
            caption={"Renovated"}
            href={"https://www.w3schools.com/w3images/house4.jpg"}
            type={"one"}
          />

          <ImgCard
            caption={"Barn House"}
            href={"https://www.w3schools.com/w3images/house3.jpg"}
            type={"one"}
          />
        </section>
      </article>

      <article className="content__about">
        <p>About</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
        <section className="content__wrapper content__wrapper_two">
          <ImgCard
            href={"https://www.w3schools.com/w3images/team2.jpg"}
            title={"John Doe"}
            caption={"CEO & Founder"}
            content={
              "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            }
            type={"two"}
          />
          <ImgCard
            href={"https://www.w3schools.com/w3images/team1.jpg"}
            title={"Jane Doe"}
            caption={"Architect"}
            content={
              "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            }
            type={"two"}
          />
          <ImgCard
            href={"https://www.w3schools.com/w3images/team3.jpg"}
            title={"Mike Ross"}
            caption={"Architect"}
            content={
              "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            }
            type={"two"}
          />
          <ImgCard
            href={"https://www.w3schools.com/w3images/team4.jpg"}
            title={"Dan Star"}
            caption={"Architect"}
            content={
              "Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum."
            }
            type={"two"}
          />
        </section>
      </article>

      <article className="content__contact">
        <form
          action="#"
          method="post"
        >
          <fieldset>
            <legend>Caption</legend>
            <p>Lets get in touch and talk about your next project.</p>

            <label>
              <input
                type="text"
                placeholder="Name"
              />
            </label>
            <label>
              <input
                type="email"
                placeholder="Email"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Subject"
              />
            </label>
            <label>
              <input
                type="text"
                placeholder="Comment"
              />
            </label>
            <input
              type="submit"
              value="SEND MESSAGE"
            />
          </fieldset>
        </form>
      </article>
    </main>
  );
};

export default Main;
