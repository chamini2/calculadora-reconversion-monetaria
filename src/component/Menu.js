import React from "react";
import "./Menu.css";

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false,
      ATHAndroid: false
    };
  }

  toggleMenu = () => {
    this.setState({ ...this.state, menu: !this.state.menu });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.menu && !prevState.menu) {
      this.refs.menu.scrollIntoView({ behavior: "smooth" });
    }
  }

  toggleATHAndroid() {
    this.setState({ ...this.state, ATHAndroid: !this.state.ATHAndroid });
  }

  render() {
    if (this.state.menu) {
      return (
        <div>
          <div className="menu-toggle" onClick={this.toggleMenu}>
            <svg viewBox="0 0 100 100" fill="#292a30">
              <g transform="rotate(45, 25, 25)">
                <rect width="70" height="10" x="25" y="20" />
              </g>
              <g transform="rotate(-45, 25, 75)">
                <rect width="70" height="10" x="25" y="70" />
              </g>
            </svg>
          </div>
          <ul ref="menu" className="menu">
            <li>
              <a href="//github.com/chamini2/calculadora-reconversion-monetaria/blob/master/add-to-homescreen/README.md" target="_blank" rel="noopener noreferrer">
                Agregar al menú de inicio
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div className="menu-toggle browser" onClick={this.toggleMenu}>
          <svg viewBox="0 0 100 100" fill="#292a30">
            <rect width="70" height="10" x="15" y="20" />
            <rect width="70" height="10" x="15" y="45" />
            <rect width="70" height="10" x="15" y="70" />
          </svg>
        </div>
      );
    }
  }
}

export default Menu;
