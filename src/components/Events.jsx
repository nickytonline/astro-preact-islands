export const Events = (props) => {
  console.log('welcome to the client-side where the children rendered via SSR', props)

  return props.children
}