import css from 'styled-jsx/css';


const styles = css`
  .item {
    position: relative;
    padding-top: 100%;
    border: 3px solid orange;
    mix-blend-mode: multiply;
  }

  .item span{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4.5vw;
    font-weight: bold;
    color: rgba(0,0,0,.7);
  }

  .item.number {
    cursor: pointer;
  }

  .item.null {
    background-color: red;
  }

  .item.marked:before, .item.number:hover:before{
    background-image: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pjxzdmcgdmlld0JveD0iMCAwIDMyIDMyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojMDAwO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2Utd2lkdGg6MnB4O308L3N0eWxlPjwvZGVmcz48dGl0bGUvPjxnIGlkPSJjcm9zcyI+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNyIgeDI9IjI1IiB5MT0iNyIgeTI9IjI1Ii8+PGxpbmUgY2xhc3M9ImNscy0xIiB4MT0iNyIgeDI9IjI1IiB5MT0iMjUiIHkyPSI3Ii8+PC9nPjwvc3ZnPg==");
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: .3;
    content: "";
    z-index: -1;
  }
`;

export default styles;