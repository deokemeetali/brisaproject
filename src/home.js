
// import './home.css';
// import Admin from './admin';
// import Blog from './blog';
// import Navbar from './navbar';

// function Home() {

//   const [showAdmin, setShowAdmin] = useState(false);
//   const [showBlog, setShowBlog] = useState(false);
 

 

//   const handleAdminClick = () => {
//     setShowAdmin(true);
//     setShowBlog(false);
//   };

//   const handleBlogClick = () => {
//     setShowBlog(true);
//     setShowAdmin(false);
//   };

//   return (
//     <div>
//       <section>
//         <Navbar/>
//       </section>
//       <div className='container'>
//         <div className='sidebar'>
//           <button className="button-css" onClick={handleAdminClick}>Admin</button>
//           <button className="button-css" onClick={handleBlogClick}>Blog</button>
//         </div>
//         <br></br>

//         {/* Conditionally render the Admin and Blog components */}
//         {showAdmin && <Admin />}
//         {showBlog && <Blog />}
//       </div>
//     </div>
//   );
// }

// export default Home;
