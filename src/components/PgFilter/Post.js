// import React, { useEffect } from "react";

// const Post = () => {
//   useEffect(() => {
//     const updateMainImage = (event) => {
//       const mainImg = document.getElementById("MainImg");
//       mainImg.src = event.target.src;
//     };

//     const smallImgList = document.querySelectorAll(".small-img");
//     smallImgList.forEach((smallImg) => {
//       smallImg.addEventListener("click", updateMainImage);
//     });

//     return () => {
//       smallImgList.forEach((smallImg) => {
//         smallImg.removeEventListener("click", updateMainImage);
//       });
//     };
//   }, []);
//   return (
//     <div>
//       <section className="container sproduct my-5">
//         <div className="row mt-5">
//           <div className="col-lg-5 col-md-12 col-12">
//             {/* first div */}

//             <img
//               className="img-fluid w-100 p-3 mb-4"
//               id="MainImg"
//               style={{ backgroundColor: "whitesmoke", borderRadius: "8%" }}
//               src="https://th.bing.com/th?id=OIP.uBZzLNUexdwwV7S-lX3o0QHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//               alt="imag room"
//             />

//             <div
//               className="small-img-group"
//               style={{
//                 display: "flex",
//                 backgroundColor: "whitesmoke",
//                 justifyContent: "space-between",
//               }}
//             >
//               <div
//                 className="small-img-col  "
//                 style={{
//                   flexBasis: "24%",
//                   backgroundColor: "whitesmoke",
//                   curser: "pointer",
//                 }}
//               >
//                 <img
//                   src=" https://th.bing.com/th?id=OIP.7hK-xY-a-9Qk_cenUelGawHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//                   width="100%"
//                   className="small-img"
//                   alt=""
//                   style={{ borderRadius: "10%" }}
//                 />
//               </div>

//               <div
//                 className="small-img-col p-1 "
//                 style={{
//                   flexBasis: "24%",
//                   backgroundColor: "whitesmoke",
//                   curser: "pointer",
//                 }}
//               >
//                 <img
//                   src="https://th.bing.com/th?id=OIP.IXQKBrWA5J-4bZy5RHBu7gAAAA&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//                   width="100%"
//                   className="small-img"
//                   alt=""
//                   style={{ borderRadius: "10%" }}
//                 />
//               </div>
//               <div
//                 className="small-img-col p-1  "
//                 style={{
//                   flexBasis: "24%",
//                   backgroundColor: "whitesmoke",
//                   curser: "pointer",
//                 }}
//               >
//                 <img
//                   src="https://th.bing.com/th?id=OIP.1jcFZkqDAdWLfPI9gAUDdAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//                   width="100%"
//                   className="small-img"
//                   alt=""
//                   style={{ borderRadius: "10%" }}
//                 />
//               </div>
//               <div
//                 className="small-img-col p-1  "
//                 style={{
//                   flexBasis: "24%",
//                   backgroundColor: "whitesmoke",
//                   curser: "pointer",
//                 }}
//               >
//                 <img
//                   src="https://th.bing.com/th?id=OIP.g3vnNEdbF5k_hFCxUaeaJAHaE-&w=304&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//                   width="100%"
//                   className="small-img"
//                   alt=""
//                   style={{ borderRadius: "10%" }}
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="col-lg-7" style={{ backgroundColor: "white" }}>
//             <p> Home/Product </p>
//             <p> Accommodation </p>
//             <p> $500 </p>
//             <p> Room Details </p>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//               eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
//               enim ad minim veniam, quis nostrud exercitation ullamco laboris
//               nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
//               reprehenderit in voluptate velit esse cillum dolore eu fugiat
//               nulla pariatur. Excepteur sint occaecat cupidatat non proident,
//               sunt in culpa qui officia deserunt mollit anim id est laborum.
//             </p>
//             <button className="btn1" type="button">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Post;




import React, { useState } from "react";

const Post = () => {
  const [mainImage, setMainImage] = useState("");
  const [roomDetails, setRoomDetails] = useState(null);

  const updateMainImage = (event, newRoomDetails) => {
    setMainImage(event.target.src);
    setRoomDetails(newRoomDetails);
  };

  const roomData = [
    {
      image: "https://th.bing.com/th?id=OIP.7hK-xY-a-9Qk_cenUelGawHaDt&w=350&h=175&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      details: {
        title: "Room 1",
        accommodation: "Accommodation 1",
        price: "$500",
        description: "Description for Room 1.",
      },
    },
    {
      image: "https://th.bing.com/th?id=OIP.IXQKBrWA5J-4bZy5RHBu7gAAAA&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      details: {
        title: "Room 2",
        accommodation: "Accommodation 2",
        price: "$600",
        description: "Description for Room 2.",
      },
    },
    {
      image: "https://th.bing.com/th?id=OIP.g3vnNEdbF5k_hFCxUaeaJAHaE-&w=304&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      details: {
        title: "Room 3",
        accommodation: "Accommodation 3",
        price: "$600",
        description: "Description for Room 3.",
      },
    },
    {
      image: "https://th.bing.com/th?id=OIP.1jcFZkqDAdWLfPI9gAUDdAHaE7&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      details: {
        title: "Room 4",
        accommodation: "Accommodation 4",
        price: "$600",
        description: "Description for Room 4.",
      },
    },
    // Add more room data entries as needed
  ];

  return (
    <div>
      <section className="container sproduct my-5">
        <div className="row mt-5">
          <div className="col-lg-5 col-md-12 col-12">
            <img
              className="img-fluid w-100 p-3 mb-4"
              id="MainImg"
              style={{ backgroundColor: "whitesmoke", borderRadius: "8%" }}
              src={mainImage || roomData[0].image} // Default to the first image
              alt="Room"
            />
            <div
              className="small-img-group"
              style={{
                display: "flex",
                backgroundColor: "whitesmoke",
                justifyContent: "space-between",
              }}
            >
              {roomData.map((room, index) => (
                <div
                  key={index}
                  className="small-img-col p-1"
                  style={{
                    flexBasis: "24%",
                    backgroundColor: "whitesmoke",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={room.image}
                    width="100%"
                    className="small-img"
                    alt={`Room ${index}`}
                    style={{ borderRadius: "10%" }}
                    onClick={(event) => updateMainImage(event, room.details)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7" style={{ backgroundColor: "white" }}>
            {roomDetails && (
              <>
                <p>{roomDetails.title}</p>
                <p>{roomDetails.accommodation}</p>
                <p>{roomDetails.price}</p>
                <p>{roomDetails.description}</p>
                <button className="btn1" type="button">
                  Book Now
                </button>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Post;
