import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
            <h1>Search propeties to rent</h1>
            <div className="header__search">
        <input className="header__searchInput"  placeholder="Search here... " type="text"/>
        
      </div>
          <div className="home__row">
          <Product
            title="Palm Harbour"
            price={2095}
            address='Nulla St.
            Mankato Mississippi,FL'
            image="https://media.istockphoto.com/photos/brown-two-story-all-american-home-picture-id1158713117?k=20&m=1158713117&s=612x612&w=0&h=s_aoDM4KNoixI9qBLmJOBPMccoWsC11zxuBGGgFRiKY="
          
          />
          <Product
            title="Beverly Springfield"
            price={2700}
            address='Fusce Rd.
            Frederick Nebraska,IN'
            image="https://i.pinimg.com/564x/c9/aa/f8/c9aaf8853557c381c80ee827db0dad64.jpg"
            
          />
          <Product
            title="Faulkner Ave"
            price={4550}
            address='Sit Rd.
            Azusa New York,US'
            image="https://media.istockphoto.com/photos/beautiful-luxury-home-exterior-at-twilight-picture-id1026205392?k=20&m=1026205392&s=612x612&w=0&h=lYFMV5cOuQQpddmwsE5QLBCyhgWQ1OI46i_dalro9OE="
            
          />
        </div>
        <div className="home__row">
          <Product
            title="Fancy House"
            price={2000}
            address='Dictum Av.
            San Antonio MI,FL'
            image="https://media.bizj.us/view/img/11074094/ashland-model-elevation-d-fireplace-front-view*750xx5229-2941-0-273.jpg"
          
          />
          <Product
            title="Sweet House"
            price={2100}
            address='Integer Rd.
            Corona New Mexico,UN'
            image="https://media.gettyimages.com/photos/modern-custom-suburban-home-exterior-picture-id1255835529?s=612x612"
            
          />
          <Product
            title="Sweet Mansion"
            price={2999}
            address='Nunc. Avenue
            Erie Rhode Island,LA'
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0LrCfRAZTd-AWaVhAf3v83tVAvnwLMdJRadRYNjR6Ou-aqLjAljf2qzssLzaEFy-gkTA&usqp=CAU"
            
          />
        </div>
        
      </div>
    </div>
  );
}

export default Home;
