#### `Components:` React mein sab kuch components ke around build hota hai. Components small, reusable, aur independent units hote hain jo UI ko represent karte hain. Aapko functional components aur class components dono ka istemal karna seekhna chahiye.


#### `Components:` React mein UI ko represent karne ke liye hote hain. Har component ek independent unit hota hai jo apne khud ke UI, state, aur behavior ke saath hota hai. Yeh ek tareeka hai jisse aap apne application ko modularize aur reusable banate hai.

##### `Functional Component:` Ye ek basic component hota hai jo sirf ek function hota hai aur props ko input ke roop mein leta hai aur UI ko return karta hai. Yeh ek simple UI component ko represent karta hai.


```javascript

// Functional Component Example
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// Usage of Functional Component
const element = <Greeting name="John" />;
ReactDOM.render(element, document.getElementById('root'));
```

##### `Class Component:` Ye ek JavaScript class hoti hai jo React.Component class ko extend karti hai. Ismein render method hota hai jo UI ko return karta hai. State aur lifecycle methods class components mein available hote hain.

```javascript
// Class Component Example
class Greeting extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}

// Usage of Class Component
const element = <Greeting name="John" />;
ReactDOM.render(element, document.getElementById('root'));
```

##### Yahan, Greeting ek component hai jo name prop ko lekar Hello, [name]! ka message render karta hai. ReactDOM.render() method se hum component ko DOM mein render karte hain.

#### Components ka upyog karke aap UI ko chhote-chhote modules mein bant sakte hain, jise aap aasani se manage aur reuse kar sakte hain. Ye modular approach development ko improve karta hai aur code ko maintain karne mein madad karta hai.
