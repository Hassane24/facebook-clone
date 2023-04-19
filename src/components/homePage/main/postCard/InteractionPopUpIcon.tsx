import { useState } from "react";

interface Props {
  reactionName: string;
  id?: string;
  className?: string;
  onClickHandler?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export const InteractionPopUpIcon = (props: Props) => {
  const [showIcon, setShowIcon] = useState(false);

  const revealIconName = () => setShowIcon(true);
  const hideIconName = () => setShowIcon(false);

  return (
    <div
      onClick={props.onClickHandler}
      onMouseEnter={revealIconName}
      onMouseLeave={hideIconName}
    >
      <img
        src={require(`../../../../assets/${props.reactionName}.png`)}
        alt={props.reactionName}
        height={"40px"}
        width={"40px"}
        id={props.id}
      />
      <div className={showIcon ? props.className : undefined}>
        {props.reactionName.charAt(0).toUpperCase() +
          props.reactionName.slice(1)}
      </div>
    </div>
  );
};
