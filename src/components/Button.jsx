export const Button = (props) => {
  let count = 0;
  const { text, onClick, ...restOfProps} = props
  return (
    <button
      {...restOfProps}

          onClick={(e) => {
          e.target.innerText = `${text} count: ${++count}`;
        }}
    >{text}</button>
  );
}
