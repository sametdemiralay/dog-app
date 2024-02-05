import { useEffect, useState } from "react";
import "./App.css";
import { Container, Description } from "./Styles/styled";

interface IDogForm {
  message: string;
  status: string;
}

function App() {
  const [dog, setDog] = useState<IDogForm>({
    message: "",
    status: "",
  });

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setDog(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      <Description>
        <ul>
          This is a Dog App built with React JS Using the Dog API. The app uses:
          <li>ReactJS & TypeScript</li>
          <li>Redux for State Management</li>
          <li>Axios for fetching Data</li>
          <li>Styled Components</li>
          <li> Unit Tests With Jest & React Testing Library</li>
        </ul>
      </Description>

      <img
        src={dog.message}
        alt="dog"
        style={{ width: "200px", height: "200px" }}
      />
    </Container>
  );
}

export default App;
