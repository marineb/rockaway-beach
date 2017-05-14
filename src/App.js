import React from 'react';
import logo from './images/logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


const Home = () => (
  <div>
    <h1>Welcome to RockawayBeach.io</h1>

    <p>
      This project makes up for the lack of information available on Rockaway Beach. We thought it would be helpful to have a simple list of all the great activities you can do there.
    </p>

    <p>We're currently designing a line of socks to help you bring the beach to the office. <a href="http://eepurl.com/ca5HSL" target="_blank">Give us your email</a> and we'll let you know when the socks are here!</p>

    <ul className="main-menu">
      <li><Link to="/beaches">1 Beaches</Link></li>
      <li><Link to="/surfing">2 Surfing</Link></li>
      <li><Link to="/apparel-gear">3 Apparel &amp; gear</Link></li>
      <li><Link to="/eat-drink">4 Eating &amp; drinking</Link></li>
      <li><Link to="/places-to-stay">5 Places to stay</Link></li>
      <li><Link to="/other-activities">6 Other activities</Link></li>
    </ul>

    <ul className="sub-menu">
      <li><Link to="/shop">Buy our socks</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>

    <div className="copyrights">&copy; 2017 <a href="https://marineboudeau.com" target="_blank">Marine Boudeau LLC</a></div>
  </div>
)

const Beaches = () => (
  <div>
    <h1>Beaches</h1>

    <p>Stretching for miles along the Rockaway Peninsula in Queens, Rockaway Beach is the <a href="https://en.wikipedia.org/wiki/Rockaway_Beach,_Queens" target="_blank">largest urban beach in the United States</a>. It’s easy to get there via public transportation. These are the best spots to visit:</p>

    <h2>Fort Tilden</h2>
    <p>Fort Tilden is located at the south end of Rockaway Beach. It's a decommissioned military base, with some cool old buildings and abandoned bunkers that are worth checking out.</p>
    <p>To get there, take the 2 train to Brooklyn College, and then transfer to the Q35 bus. Get off at the first stop after the bridge, Beach 169th St. From there, walk south until you reach the beach.</p>
    <p>There are no lifeguards on this beach, but it’s usually less crowded, and has a more relaxed feel.</p>

    <h2>Jacob Riis Beach</h2>
    <p>The Q35 bus will drop you off right at Jacob Riis Park. On the beach, there are different designated sections, including family and queer. During the summer months, you’ll find lots of food vendors and live music here. Jacob Riis is also wider and more spacious than other sections of Rockaway Beach.</p>

    <h2>Other beaches</h2>
    <p>Any spot between Beach 86th Street and Beach 106th Street makes a nice visit, too. Since Hurricane Sandy, the city has renovated many buildings along the boardwalk, including public restrooms and lifeguard stations. If you’re having trouble deciding where to go, take a look at the <Link to="/eat-drink">local restaurant selection</Link>. This area has lots of good spots to eat, drink, and dance.</p>

    <p>To get there, you can take the A train heading towards Far Rockaway, and transfer to the Rockaway Park Shuttle at Broad Channel. Or, you can take the 2 train to Brooklyn College and transfer to the Q35 bus. Then, at Jacob Riis Beach, transfer to the Q22 bus.</p>

    <p>Keep in mind that there’s no swimming allowed at the reserved surfing spots, which are around Beach 92nd St. and Beach 67th St. You can swim discreetly on the edges of these beaches, as long as you're keeping an eye out for incoming surfers. Usually, there’s also a spot nearby reserved for swimmers only.</p>

    <div className="back-home">
      <Link to="/">👈 home</Link>
    </div>


  </div>
)

const Surfing = () => (
  <div>
    <h1>Surfing</h1>

    <h2>Beaches</h2>
    <p>Areas dedicated to surfing can be found at:
      <ul>
        <li>Beach 67th to 69th St. (the largest area for surfing)</li>
        <li>Beach 87th to 92nd St.</li>
        <li>Beach 110th to 111th St.</li>
      </ul>
    </p>
    <p>The A train will take you directly to Beach 67th St. (just make sure you're on a  Far Rockaway-bound A train; the Lefferts Boulevard branch doesn’t go to the Rockaways). For the other beaches, take the A train to Broad Channel and switch to the shuttle train.</p>
    <p>Depending on where you’re coming from, you can also take the 2 train to Brooklyn College and transfer to the Q35 bus to Riis Beach. Once you reach Riis Park, transfer to the Q22 bus, which will take you to any of these beaches.</p>

    <h2>Surf lessons</h2>
    <ul>
      <li><a href="http://www.localssurfschool.com/" target="_blank">Locals Surf School</a>, located at Beach 69th St., offers both group and individual lessons, as well as summer camp for kids.</li>
      <li><a href="http://surflessonsnewyork101.com/" target="_blank">New York Surf School</a></li>
      <li><a href="http://alohanycsurfschool.com/" target="_blank">Aloha NYC Surf School</a></li>
      <li><a href="http://www.boarderssurfshop.com/files/Surfing_Lessons.html" target="_blank">Boarders</a></li>
    </ul>

    <h2>Renting equipment</h2>
    <h3><a href="http://www.localssurfschool.com/" target="_blank">Locals Surf School</a></h3>
    <p>If you text or email them a day in advance, they’ll put a foam board aside for you. You can pick it up at their tent at Beach 67th St. They're usually on the beach by 8am—great if you want to ride early.</p>

    <h3><a href="http://breakwatersurfcompany.com/" target="_blank">Breakwater Surf</a></h3>
    <p>Located right by the  Beach 67th Street subway stop, they open at 8am on weekends and 9am during the week. You can choose from both foam and hard top boards in sizes between six to nine feet. They sell out quickly on summer weekends, so be sure to get there by 10:30am.</p>

    <h3><a href="http://www.boarderssurfshop.com/" target="_blank">Boarders Surf Shop</a></h3>
    <p>Boarders has several locations: 92nd St., 98th St., and a pop up shop at 68th Street that runs through the end of September. All locations open at 10am and offer both foam and hard top boards from six to nine feet (though the pop up shop only has larger boards).</p>


    <h2>Surfboard lockers</h2>
    <ul>
      <li><a href="http://www.boarderssurfshop.com/" target="_blank">Boarders Surf Shop</a>  offers 24/7 locker access for $70/month (92nd St.).</li>
      <li><a href="http://breakwatersurfcompany.com/" target="_blank">Breakwater Surf</a> offers locker access during operating  hours for $40/month (67th St.).</li>
      <li><a href="http://marina59.com/watersports.html" target="_blank">Marina 59</a> offers locker rentals for $75/month (59th St.).</li>
      <li>Some surfers also share tiny studios or rental shacks to store their boards.</li>
    </ul>

    <div className="back-home">
      <Link to="/">👈 home</Link>
    </div>

  </div>
)

const ApparelGear = () => (
  <div>
    <h1>Apparel &amp; gear</h1>
      <ul>
        <li><a href="http://www.localssurfschool.com/apparel" target="_blank">Local Surf School</a></li>
        <li><a href="http://www.rockawaybeachclothing.com/shop/" target="_blank">Rockaway Beach Clothing</a></li>
        <li><a href="http://www.paulsurf.com/" target="_blank">Paul Surf</a> shapes boards locally and offers a one-day workshop where you can learn to shape your own</li>
      </ul>

      <div className="back-home">
        <Link to="/">👈 home</Link>
      </div>

  </div>
)

const EatDrink = () => (
  <div>
    <h1>Eating &amp; drinking</h1>

    <h3><a target="_blank" href="https://www.yelp.com/biz/rippers-far-rockaway">Ripers</a> (Beach 86th)</h3>
    A tent-covered burger joint right on the boardwalk.

    <h3><a target="_blank" href="https://www.yelp.com/biz/the-wharf-bar-and-grill-rockaway-park">Rockaway Beach Surf Club</a> (Beach 87th)</h3>
    An indoor/outdoor bar with delicious tacos, great frozen drinks, and a fun, beachy vibe. Sometimes there’s a DJ.

    <h3><a target="_blank" href="https://www.yelp.com/biz/sayras-wine-bar-far-rockaway">Sayra’s Wine Bar</a> (Beach 91st)</h3>
    Good frozen drinks and tapas.

    <h3><a target="_blank" href="https://www.yelp.com/biz/thai-rock-rockaway-beach">Thai Rock</a> (Beach 92st, Jamaica Bay)</h3>
    Michelin recommended Thai food.

    <h3><a target="_blank" href="https://www.yelp.com/biz/bungalow-bar-and-restaurant-rockaway-beach">Bungalow Bar &amp; Restaurant</a> (Beach 92st, Jamaica Bay)</h3>
    A casual seafood spot on the waterfront.

    <h3><a target="_blank" href="https://www.yelp.com/biz/connollys-bar-rockaway-beach">Connolly’s Bar</a> (Beach 95th)</h3>
    An Irish pub that serves pina coladas in styrofoam cups.

    <h3><a target="_blank" href="https://www.yelp.com/biz/the-playland-motel-new-york">Playland Motel</a> (Beach 97th)</h3>
    A fun spot for cocktails and tasty food with awesome decor.

    <h3><a target="_blank" href="https://www.yelp.com/biz/breezys-bbq-rockaway-beach">Breezy's BBQ</a> (Beach 97th)</h3>
    A beachside concession stand specializing in pulled pork.

    <h3><a target="_blank" href="https://www.yelp.com/biz/caracas-arepa-bar-rockaway-park-3">Caracas</a> (Beach 105th)</h3>
    Arepas and good music right on the beach.

    <h3><a target="_blank" href="https://www.yelp.com/biz/the-wharf-bar-and-grill-rockaway-park">The Warf</a> (Beach 116th, Jamaica Bay)</h3>
    Unpretentious bar food with a great view of Jamaica Bay.

    <h3><a target="_blank" href="http://riisparkbeachbazaar.com/">Riis Beach Bazaar</a> (Jacob Riis)</h3>
    Food stands with offerings from many different Brooklyn vendors, including Ample Hills Creamery, Fletcher’s Barbecue, Ed &amp; Bev’s, and more.

    <h3>Beach 97th St.</h3>
    There’s also a cluster of bars and food stands on the boardwalk by 97th St.

    <h3><a target="_blank" href="http://riisparkbeachbazaar.com/">Edgemere Farm</a> (385 Beach 45th Street)</h3>
    Edgemere Farm is a half-acre urban farm located in the beachside community of Far Rockaway, where a wide variety of fresh and organically grown vegetables, flowers and herbs are now cultivated. Bees, chickens and many varieties of pollinators use the farm as home base as well. The farm is a self-sustaining enterprise and acts as a zero-profit business. The farm stand will be open on Saturdays and Sundays from 9AM-2PM from May 13 until October 29th. Breakfast will be available on both days, hours TBA.

    <div className="back-home">
      <Link to="/">👈 home</Link>
    </div>
  </div>
)

const PlacesToStay = () => (
  <div>
    <h1>Places to stay</h1>
    <ul>
      <li><a href="http://www.truckafloat.com/" target="_blank">Truck-A-Float</a> (Marina)</li>
      <li><a href="https://www.airbnb.com/s/rockaway-beach/homes?allow_override%5B%5D=&ne_lat=40.58879754802457&ne_lng=-73.81177550556629&search_by_map=true&sw_lat=40.5185058874221&sw_lng=-73.85915404560535&zoom=14&s_tag=iD026_h9" target="_blank">Browse the many houses on Airbnb</a></li>
    </ul>

    <div className="back-home">
      <Link to="/">👈 home</Link>
    </div>

  </div>
)

const OtherActivities = () => (
  <div>
    <h1>Other activities</h1>

      <ul>
        <li>
          <a href="http://www.brooklyngolfcenter.com/" target="_blank">Brooklyn Golf Center</a>: an 18-hole par 3 golf course just off the boardwalk at Riis Park Beach.
        </li>
        <li>
          <a href="http://marina59.com/watersports.html" target="_blank">Marina 59</a>: rent fishing skiffs, kayaks, and paddleboards on Jamaica Bay.
        </li>
        <li><a href="http://www.nyharborparks.org/visit/jaba.html" target="_blank">Jamaica Bay Wildlife Refuge</a></li>
      </ul>

      <div className="back-home">
        <Link to="/">👈 home</Link>
      </div>

  </div>
)

const Shop = () => (
  <div>
    <h1>Shop</h1>

    <p>Socks coming soon!</p>
    <p><a href="http://eepurl.com/ca5HSL" target="_blank">Give us your email</a> and we'll let you know when our socks are for sale!</p>

    <div className="back-home">
      <Link to="/">👈 home</Link>
    </div>

  </div>
)

const Contact = () => (
  <div>
    <h1>Contact</h1>
    <p>
      To share your feedback or suggest corrections, email me at <a href="mailto:hello@marineboudeau.com">hello@marineboudeau.com</a>.
    </p>
    <p>
      Marine<br/>
      <a href="http://twitter.com/marineboudeau" target="_blank">@marineboudeau</a>
    </p>

    <div className="back-home">
      <Link to="/">👈 home</Link>
    </div>

  </div>
)

const App = () => (
  <Router>
    <div className="container">
      <Link to="/" className="logo"><img src={logo} className="App-logo" alt="logo" /></Link>

      <Route exact path="/" component={Home}/>
      <Route path="/beaches" component={Beaches}/>
      <Route path="/surfing" component={Surfing}/>
      <Route path="/apparel-gear" component={ApparelGear}/>
      <Route path="/eat-drink" component={EatDrink}/>
      <Route path="/places-to-stay" component={PlacesToStay}/>
      <Route path="/other-activities" component={OtherActivities}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/shop" component={Shop}/>
    </div>
  </Router>
)

export default App;
