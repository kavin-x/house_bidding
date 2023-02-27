/* istanbul ignore file */
import { Header } from "./components/header/Header";
import { Hero } from "./components/main/hero/HeroSection";
import { Footer } from "./components/footer/Footer";
import "./Container.css";

import { BestRecipes } from "./components/main/ourBestRecipes/BestRecipes";
import { BestServices } from "./components/main/bestServices/BestServices";
import { Contact } from "./components/main/contact/Contact";
import { Blog } from "./components/main/blog/Blog";
import SignIn from "./components/sign-in/sign-in";
import SignUp from "./components/sign-up/sign-up";

function Container() {
  return (
    <>
      <SignIn/>
      <SignUp/>
    </>
  );
}

export default Container;
