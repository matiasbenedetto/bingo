import css from 'styled-jsx/css';

export const globalStyles = css.global`
  html, 
  body {
      height: 100%;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;
      font-family: Arial, Helvetica, sans-serif;
  }

  body {
    background: #eee;
  }
`;

const styles = css`
  .board {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    max-width: 75vw;
    margin: auto;
    border-radius: 15px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, .3);
    background-image: url("https://img.freepik.com/foto-gratis/textura-marron_1253-152.jpg?size=626&ext=jpg");
    overflow: hidden;
    padding: 2.5vw;
    border-top: 2px solid rgba(255,255,255,.5);
    border-bottom: 1px solid rgba(0, 0, 0, .2);
    margin-bottom: 100px;
  }
  
  .column {
    display: flex;
    flex-direction: column;
  }
`;

export default styles;