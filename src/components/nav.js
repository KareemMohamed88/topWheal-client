const Navbar = () => {

  return (
    <div style={{width: "100%", height: "60px", display: "flex", justifyContent: 'space-between', alignItems: "center", padding: "0 18%"}}>
      <div className="logo">
        <h1 style={{fontSize: "20px"}}>supercharger</h1>
      </div>
      <ul>
        <li style={{display: "inline-block", margin: "0 10px"}}><a href="#">Home</a></li>
        <li style={{display: "inline-block", margin: "0 10px"}}><a href="#">About us</a></li>
        <li style={{display: "inline-block", margin: "0 10px"}}><a href="#"></a>Contact us</li>
      </ul>
    </div>
  );
};

export default Navbar;
