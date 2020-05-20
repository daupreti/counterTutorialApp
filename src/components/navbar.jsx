import React from "react";

// Stateless Functional Component
//const Navbar = props => {

//In the following line we use object destructing to avoid using props.
//Instead we can just use property directly using object destructing.
const Navbar = ({ totalCounters }) => {
  console.log("Navbar-Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a
        className="navbar-brand"
        href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"
      >
        Navbar{" "}
        <span className="badge badge-pill badge-secondary">
          {/* {props.totalCounters} */}
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default Navbar;

// WE CAN ALSO DO THIS USING CLASS. BUT USED STATELESS FUNCTIONAL COMPONENT ABOVE FOR TESTING PURPOSE.
// export default class Navbar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a
//           className="navbar-brand"
//           href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md"
//         >
//           Navbar{" "}
//           <span className="badge badge-pill badge-secondary">
//             {this.props.totalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }
