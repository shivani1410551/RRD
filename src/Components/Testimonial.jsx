import { FaDatabase } from "react-icons/fa";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="container">
        <div className="outline">
          <div className="content">
            <i>
              <FaDatabase />
              Staxx{" "}
            </i>
            <p className="body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum, fuga. Lorem ipsum dolor, sit amet consectetur
              adipisicing elit. Laborum dolor consequuntur, cum nulla sit neque
              officiis similique sunt! Laborum, doloribus.
            </p>
            <div className="name">
              <p>John doe</p>
              <p>CEO,DIMSUm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
