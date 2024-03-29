#### Components: React mein sab kuch components ke around build hota hai. Components small, reusable, aur independent units hote hain jo UI ko represent karte hain. Aapko functional components aur class components dono ka istemal karna seekhna chahiye.


#### Components React mein UI ko represent karne ke liye hote hain. Har component ek independent unit hota hai jo apne khud ke UI, state, aur behavior ke saath hota hai. Yeh ek tareeka hai jisse aap apne application ko modularize aur reusable banate hain.

##### Functional Component: Ye ek basic component hota hai jo sirf ek function hota hai aur props ko input ke roop mein leta hai aur UI ko return karta hai. Yeh ek simple UI component ko represent karta hai.


```javascript

// Functional Component Example
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage of Functional Component
const element = <Greeting name="John" />;
ReactDOM.render(element, document.getElementById('root'));
```
