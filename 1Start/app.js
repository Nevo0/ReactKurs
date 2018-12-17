const header = <h1 className="title">Witaj na stronie!</h1>;

const classBig = "big";

const handleClick = () => alert("klik!");
const main = (
  <div>
    <h1 person="osoby" onClick={handleClick} className="red">
      Pierwszy artykuł
    </h1>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae iste
      similique itaque a sequi provident corporis fuga, neque libero dolore
      quidem iure aliquam mollitia, velit pariatur quos sint iusto culpa?
    </p>
  </div>
);

const text = "stopka";
const largeTxt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste dolorem ipsa animi, qui ipsam commodi veritatis vel perferendis nesciunt, tenetur eum eaque id possimus corporis magnam deleniti dolor fugit cumque ratione! Iure quis, similique magni maxime nulla distinctio velit minima, excepturi aut numquam tempore beatae aspernatur consequuntur ab. Consequuntur iste explicabo aliquid voluptatibus commodi dolor nobis id consequatur eaque nisi laborum, harum error necessitatibus esse molestiae vero? Molestiae sed pariatur repudiandae unde impedit accusamus blanditiis nam, officia eligendi sit nihil perspiciatis animi ipsa magnam atque eum aut quia! Quos aspernatur labore pariatur, numquam earum distinctio atque quia quaerat dicta fuga consequuntur aut blanditiis nam suscipit reprehenderit est impedit ipsam. Voluptates, maiores repellat adipisci odit dolorum temporibus accusantium rerum dolor nihil praesentium nobis, debitis natus fugit tempore amet itaque similique est saepe reprehenderit possimus ex delectus. Veritatis dolorem assumenda illo pariatur autem aliquid praesentium, vel, obcaecati, corrupti aspernatur delectus perspiciatis rerum incidunt. Eum quam porro officia dolore doloremque ut, enim illo repellat et nam omnis magni assumenda, aliquid, beatae sapiente quisquam sint nisi. Veniam odio aut nemo! Obcaecati non repellat aliquam fuga deleniti officiis consequatur quaerat! Enim adipisci dicta eaque non vel! At voluptatibus consequuntur impedit! Distinctio, laborum veniam! Officiis, mollitia.";
const footer = (
  <footer>
    {largeTxt}
    <p className={classBig}>{text}</p>
  </footer>
);

const app = [header, main, footer];

ReactDOM.render(app, document.getElementById("root"));
