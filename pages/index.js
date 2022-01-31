import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

const GlobalStyle = () => {
  return (
    <style global jsx>
      {`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          background: silver;
        }
        body {
          font-family: sans-serif;
        }
      `}
    </style>
  );
};

const Titulo = (props) => {
  console.log(props);
  const Tag = props.tag;
  return (
    <>
      <Tag>{props.children}</Tag>
      <style jsx>
        {`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals["900"]};
            font-size: 20px;
            font-weight: 200;
          }
        `}
      </style>
    </>
  );
};

const HomePage = () => {
  return (
    <div>
      <GlobalStyle />
      <Titulo tag="h2">Boas Vindas de Volta!</Titulo>
      <h2>Discord - Alura Matrix</h2>
      <style jsx>{`
        h1 {
          color: red;
        }
        h2 {
          color: white;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
