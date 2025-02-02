
const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Tech News</h1>
      <p>Your daily dose of the latest tech news and gadget reviews.</p>
  

      <p>
        Discover the world of technology with our in-depth articles, expert reviews, and breaking news. Stay updated with the latest gadgets, AI advancements, and more.
        Looking for advice on your next tech purchase? We provide detailed reviews and buying guides to help you make the best choice.
      </p>

      <h2>Explore Our Categories</h2>
      <div className="category-list">
        <div className="category">
          <img src="https://media.geeksforgeeks.org/wp-content/uploads/20240308162931/Difference-Between-Machine-Learning-and-Artificial-Intelligence.webp" alt="AI & Machine Learning" />
          <h3>AI & Machine Learning</h3>
          <a href="#">Explore</a>
        </div>
        <div className="category">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJTb0A6qsP5cnreL5nrf5Vbitp-D7w9KrLgQ&s" alt="Gadget Reviews" />
          <h3>Gadget Reviews</h3>
          <a href="#">Explore</a>
        </div>
        <div className="category">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT3wM8tlWMercQ8_fogKSo5Pl1aVmipnmoFg&s" alt="Tech Innovations" />
          <h3>Tech Innovations</h3>
          <a href="#">Explore</a>
        </div>
        <div className="category">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR12yApQ77Nq_VvKJwYnhAVx8jYDzOszQcrOg&s" alt="Mobile Devices" />
          <h3>Mobile Devices</h3>
          <a href="#">Explore</a>
        </div>
      </div>

      <h2>Latest News</h2>
      <ul>
        <li><a href="#">Apple Launches New iPhone 15</a></li>
        <li><a href="#">Tesla Latest Electric Car Features</a></li>
        <li><a href="#">Google AI Breakthrough: What it Means for You</a></li>
        <li><a href="#">The Future of Virtual Reality: 2025 and Beyond</a></li>
      </ul>

      <h2>Tech Poll</h2>
      <p>What the most exciting tech development for you this year?</p>
      <form>
        <label>
          <input type="radio" name="tech" value="AI" /> AI
        </label>
        <label>
          <input type="radio" name="tech" value="5G" /> 5G
        </label>
        <label>
          <input type="radio" name="tech" value="Electric Vehicles" /> Electric Vehicles
        </label>
        <button type="submit">Vote</button>
      </form>

      <h2>Stay Updated</h2>
      <form>
        <input type="email" placeholder="Enter your email" />
        <button type="submit">Subscribe</button>
      </form>

      <h2>Follow Us</h2>
      <p>Stay connected with us on social media:</p>
      <a href="#">Facebook</a> | 
      <a href="#">Twitter</a> | 
      <a href="#">Instagram</a> |
      <a href="#">YouTube</a>

      <footer>
        <p>&copy; 2025 Tech News. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;