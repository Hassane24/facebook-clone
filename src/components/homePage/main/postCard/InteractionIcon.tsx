import { useState } from "react";
import { reactors } from "./InteractWithPost";

interface Props {
  imageName: string;
  reactors: reactors[];
  className: any;
}

export const InteractionIcon = (props: Props) => {
  const [showReactors, setShowReactorsList] = useState(false);

  const revealReactors = () => setShowReactorsList(true);
  const hideReactors = () => setShowReactorsList(false);

  return (
    <div onMouseEnter={revealReactors} onMouseLeave={hideReactors}>
      <img
        style={{ display: "block" }}
        src={require(`../../../../assets/${props.imageName}.png`)}
        alt={props.imageName}
        height={"18px"}
        width={"18px"}
      />
      {showReactors && (
        <div
          className={props.className}
          style={{ bottom: "31px", left: "-70%" }}
        >
          <h3
            style={{
              margin: "0 0 4px 0",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            {props.imageName.charAt(0).toUpperCase() + props.imageName.slice(1)}
          </h3>
          {props.reactors.map((reactor, index) =>
            reactor.reactionName === props.imageName ? (
              <div key={index}>
                <span>
                  {reactor.firstName} {reactor.surname}
                </span>
              </div>
            ) : null
          )}
        </div>
      )}
    </div>
  );
};
