import mostRecent from "../../../assets/most-recent.png";
interface SideBarItem {
  sideBarItemName: string;
  imagePosition?: string;
  icons?: string;
}
export const SideBarItem = ({
  sideBarItemName,
  icons,
  imagePosition,
}: SideBarItem) => {
  return (
    <div>
      <div>
        {icons ? (
          <i
            style={{
              backgroundPosition: `0 ${imagePosition}`,
              backgroundSize: "38px 570px",
              width: "36px",
              height: "36px",
              backgroundRepeat: "no-repeat",
              display: "inline-block",
              backgroundImage: `url(${icons})`,
            }}
          />
        ) : (
          <img src={mostRecent} width="36px" height="36px" />
        )}
      </div>
      <span>{sideBarItemName}</span>
    </div>
  );
};
