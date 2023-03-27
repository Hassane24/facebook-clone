import utilityIcons from "../../../../assets/utility-icons-3.png";
export const InteractWithPost = () => {
  return (
    <div>
      <div>
        <div></div>
        <div></div>
      </div>
      <div>
        <div>
          <i
            style={{
              backgroundImage: `url(${utilityIcons})`,
              backgroundPosition: "0px -504px",
              backgroundSize: "26px 858px",
              width: "16px",
              height: "16px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
        <div>
          <i
            style={{
              backgroundImage: `url(${utilityIcons})`,
              backgroundPosition: "0px -684px",
              backgroundSize: "26px 858px",
              width: "16px",
              height: "16px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};
