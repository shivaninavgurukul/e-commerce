// import React from 'react';

// function Navbar() {
//     return (
//         <nav className="navbar navbar-light" style={{  color: '#fff' }}>
//             <div className="container-fluid">
//                 <img  src="Frame.png" className="navbar-brand" style={{height:60,width:100}}></img>
//                 <form className="d-flex">
//                     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success" type="submit" style={{ backgroundColor: '#2980b9', color: '#fff' }}>
//                         Search
//                     </button>
//                 </form>
//                 <img className="navbar-brand" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchlYw3IpplHl2aFgzzFi1h2Fudx8_47W6tg&usqp=CAU' style={{height:60,width:80}}><p>My Cart</p></img>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;


import React from 'react';
import Link from 'next/link';
function Navbar() {
    return (
        <nav className="navbar navbar-light" style={{ color: '#fff' }}>
            <div className="container-fluid">
                <img src="Frame.png" className="navbar-brand" style={{ height: 60, width: 80 }} alt="Logo" />
                <Link id="space" href='./'>Women</Link>
                <Link id="space" href='./'>Men</Link>
                <Link id="space" href='./'>Jewlary</Link>
                <Link id="space" href='./'>Electronics</Link>
                <form id="navbar" className="d-flex" style={{marginLeft:'auto'}}>
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <img src='Search.png' style={{ height: 40, width: 80 }} alt="Cart" />
                </form>
                <div className="navbar-brand">
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchlYw3IpplHl2aFgzzFi1h2Fudx8_47W6tg&usqp=CAU' style={{ height: 40, width: 80 }} alt="Cart" />
                    <p>My Cart</p>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;