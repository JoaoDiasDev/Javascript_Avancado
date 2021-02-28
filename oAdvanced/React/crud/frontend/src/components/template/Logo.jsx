import "./Logo.css";
import LogoTipo from "../../assets/images/logoX1.png";
import { Link } from 'react-router-dom'
import React from "react";

export default function Logo(props) {
  return <aside className="logo">
    <Link to="/" className="logo">
      <img src={LogoTipo} alt="logo" /></Link></aside>;
}
