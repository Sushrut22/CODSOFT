import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=berlin,madrid,london"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/id/539018660/photo/taj-mahal-hotel-and-gateway-of-india.jpg?s=1024x1024&w=is&k=20&c=_qpRABc0qCzpGMovVIMZ1g-PxMdlvbqOWNEXtrC-JRs="
              alt="Mumbai"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              {/* <h2>{data[0]} properties</h2> */}
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/c5/e8/5c.jpg"
              alt="Delhi"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              {/* <h2>{data[1]} properties</h2> */}
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://www.holidify.com/images/bgImages/KOLKATA.jpg"
              alt="Kolkata"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              {/* <h2>{data[2]} properties</h2> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
