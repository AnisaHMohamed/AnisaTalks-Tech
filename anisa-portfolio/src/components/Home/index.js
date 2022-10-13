import { useState } from "react";
import Header from "../Header";
import "./style.css";

const Home = () => {
  const [position, setPosition] = useState({});

  window.addEventListener("scroll", () => {
    let value = window.scrollY;
    setPosition({
      ...position,
      stars: { left: `${0.25 * value}px` },
      moon: { top: `${1.05 * value}px` },
      mountains_behind: { top: `${0.5 * value}px` },
      mountains_front: { top: `${0 * value}px` },
      text: { marginRight: `${5 * value}px`, marginTop: `${1.5 * value}px` },
      btn: { marginTop: `${1.5 * value}px` },
      header: { top: `${0.5 * value}px` },
    });
  });

  return (
    <div className="Home">
      <header className="CssLibrary-header"></header>
      <Header top={position.header} />
      <div className="Home-body">
        <section>
          <img src="stars.png" id="stars" alt="stars" style={position.stars} />
          <img src="moon.png" id="moon" alt="moon" style={position.moon} />
          <h2 id="text" style={position.text}>
            Let's Talk About It
          </h2>
          <a href="#sec" id="btn" style={position.btn}>
            More About Me
          </a>
          <img
            src="mountains_behind.png"
            id="mountains_behind"
            alt="mountains_behind"
            style={position.mountains_behind}
          />
          <img
            src="mountains_front.png"
            id="mountains_front"
            alt="mountains_front"
            style={position.mountains_front}
          />
        </section>
        <div className="sec" id="sec">
          <h2> Parallax scrolling</h2>
          <p>
            Cupcake cookie caramels lollipop cotton candy gummi bears I love
            gingerbread cake. Halvah cake toffee marshmallow ice cream sweet
            roll Homele pie toffee. Macaroon I love sugar plum lemon drops
            chocolate bar muffin gummies bear claw. I love cake danish tart cake
            pastry pudding. Bonbon cotton candy sesame snaps jelly beans icing.
            Jujubes marzipan cake I love oat cake. Ice cream gingerbread icing
            tootsie roll wafer wafer powder. Candy canes pie candy I love pastry
            I love cake sweet roll. Cake cookie biscuit sweet roll caramels
            cotton candy marshmallow gummies sesame snaps. Chocolate cake icing
            I love I love wafer bonbon. Marzipan I love I love carrot cake
            marshmallow sweet. Macaroon I love cake halvah tart cookie soufflé
            Homele pie gingerbread. Wafer cake dragée gingerbread pie I love
            tiramisu croissant. Chocolate cake chocolate carrot cake wafer
            gummies powder.
          </p>
          <br />
          <br />
          <p>
            Marzipan tootsie roll chocolate bar caramels danish jujubes sugar
            plum powder. I love gingerbread jelly wafer I love shortbread
            gingerbread cheesecake. Dragée halvah sesame snaps tiramisu toffee
            cake. Pudding ice cream soufflé bear claw donut pie candy. Fruitcake
            halvah candy gingerbread chupa chups tiramisu. I love toffee sweet
            ice cream tiramisu. Jujubes chupa chups candy canes dragée ice cream
            gummi bears. Danish jelly soufflé marzipan pastry. Homele pie icing
            tiramisu tiramisu bear claw. Carrot cake chupa chups dessert muffin
            pastry candy. Gummi bears I love fruitcake cake candy marzipan.
            Croissant croissant cotton candy gingerbread gummies soufflé cake
            croissant I love. Pudding icing I love sesame snaps lollipop pastry
            I love.
          </p>
          <br />
          <br />
          <p>
            Jujubes powder pudding lollipop cookie shortbread liquorice.
            Marshmallow jujubes I love I love pie chocolate bar tiramisu.
            Marshmallow halvah marshmallow biscuit topping candy. Chocolate bar
            cheesecake dragée sesame snaps chocolate cake gummies. Topping
            caramels powder biscuit I love sweet I love sugar plum sugar plum.
            Danish I love candy chocolate bar sweet. Sweet donut sesame snaps
            chocolate bar sweet roll lemon drops. Marzipan cupcake danish I love
            cake I love fruitcake sweet toffee. Tootsie roll sesame snaps candy
            jelly beans marzipan. Liquorice donut chocolate cake Homele pie
            muffin carrot cake cheesecake sweet muffin. Bonbon sweet I love
            marzipan pie jelly topping pie candy canes. Sesame snaps I love
            lollipop topping cupcake I love sugar plum. Chocolate cake sweet
            roll gummies dragée pastry gingerbread. Pie macaroon powder danish I
            love icing pastry ice cream fruitcake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
