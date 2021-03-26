import React from "react";
import { Fotter } from "../components/Fotter";
import { Navbar } from "../components/Navbar";
import { IconName } from "../typescript/asset";

export default function index() {
  return (
    <div className="container container__color">
      <Navbar />

      <section className="intro">
        <div>
          <h1>Borlette . Lotto</h1>
          <h2>Transparent . Fair . Innovation </h2>
        </div>

        <div>
          <p>Project Status: In progress</p>
        </div>
      </section>

      <section className="img1">
        <img src={IconName.img1} />
      </section>

      <section className="about-goal-product">
        <div className="about">
          <div className="title">
            <img src={IconName.line} />
            <span> About Us</span>
          </div>
          <p>
            Do you own a lottery business in Haiti? If so, you are surely
            overwhelmed by the management of the different bodies of your
            business, tired by the management of points of sale and employees.
            We are here for you. Lotto is the first B2B tech solution for
            lottery owners. Our mission to provide you with the tools for
            digitization.
          </p>
        </div>

        <div className="goal">
          <div className="title">
            <img src={IconName.line} />
            <span>Your Goal</span>
          </div>
          <h1>Digitize your business.</h1>

          <div className="title">
            <img src={IconName.line} />
            <span> Your Product</span>
          </div>
          <p>
            A mobile application for your salespeople and a web application to
            manage the different instances of your business.{" "}
          </p>
        </div>
      </section>

      <section className="img2">
        <img src={IconName.img2} />
      </section>

      <section className="pub__items">
        <div>
          <h1>Why we are better than the others</h1>
        </div>
        <div>
          <p>
            Lotto is a project started by former owner of borlette. We know your
            problems better than anyone because we too have experienced them.
          </p>
        </div>

        <div className="pub__item">
          <div className="pub__item-title">
            <span>01</span>
            <img src={IconName.line} />
          </div>
          <h3>Transparent</h3>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
            maiores, aut sit itaque ipsam enim sint illo! Temporibus debitis
            impedit consectetur iure perspiciatis, quidem quisquam, tempore enim
            dolorem totam quasi.
          </p>
        </div>
        <div className="pub__item">
          <div className="pub__item-title">
            <span>02</span>
            <img src={IconName.line} />
          </div>
          <h3>Innovation </h3>
          <p>
            Built on the most efficient technologies on the market with
            developers always ready to push their limits before delivering a
            quality product. We are proud of our work!
          </p>
        </div>

        <div className="pub__item">
          <div className="pub__item-title">
            <span>03</span>
            <img src={IconName.line} />
          </div>
          <h3>Fair</h3>
          <p>
            Our products allow you to simplify your business, free up your time
            and guarantee your employees a pension. Likewise, you can use our 1
            month guaranteed offer or refund. Test before you buy!
          </p>
        </div>

        <div className="inNumbers">
          <h2>In numbers</h2>
          <p>
            Lotto has already helped over 20 owners and hundreds of employees
            simplify their lives. Join our growing community day by day.
          </p>
        </div>

        <div className="numbers">
          <div>
            <p className="win-number">12</p>
            <p>Owner for last 3 month</p>
          </div>

          <div>
            <p className="win-number"> {">"} 5000</p>
            <p>Tikets sell</p>
          </div>

          <div>
            <p className="win-number">150</p>
            <p>Employes</p>
          </div>
        </div>
      </section>
      <Fotter />
    </div>
  );
}
