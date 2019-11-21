// import React, { Component } from "react";
// // React creates an instance of your DogsList class.
// // React will run render() and compare the result of that (virtual DOM) with the (real) DOM.
// // React will run componentDidMount() and start a request to the Dogs API.
// // Some time later: the API response will come back and updateBreeds invokes the setState method.
// // React will run render() again but now with a new state; the result of the render will contain the dog breeds <li> items.

// export default class DogsList extends Component {
//   state = {
//     dogBreeds: null
//   };

//   componentDidMount() {
//     fetch("https://dog.ceo/api/breeds/list/all")
//       .then(res => res.json())
//       .then(data => {
//         const breeds = Object.keys(data.message);
//         this.updateBreeds(breeds);
//         // console.log("this data, right?", Object.keys(data.message));
//       })
//       .catch(console.error);
//   }

//   updateBreeds(breeds) {
//     this.setState({
//       dogBreeds: breeds
//     });
//   }

//   render() {
//     return (
//       <div className="dogs-list">
//         <h1>Dogs List</h1>
//         {/* if state dogbreeds is null, display 'Loading' */}
//         {/* if the left hand side of the && operator is true
//         the whole expression will evaluate to
//         what is on the right hand side */}
//         {/* if the left hand side of the && operator is false
//         the whole expression will evaluate to
//         what is on the left hand side */}
//         {this.state.dogBreeds === null && "Loading..."}
//         {this.state.dogBreeds === null || (
//           <ul>
//             {this.state.dogBreeds.map(breed => (
//               <li key={breed}>{breed}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     );
//   }
// }
// now split DogsList into DogsList and DogsListContainer

import React, { Component } from "react";

export default class DogsList extends Component {
  renderDogBreed(breed) {
    return <li key={breed}>{breed}</li>;
  }

  render() {
    const { dogBreeds } = this.props;
    return (
      <div className="dogs-list">
        <h1>Dogs List</h1>

        {!dogBreeds && "Loading..."}

        {dogBreeds && <ul>{dogBreeds.map(this.renderDogBreed)}</ul>}
      </div>
    );
  }
}
