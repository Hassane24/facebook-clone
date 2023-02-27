interface PopUp {
  show: Boolean;
  top: number;
  left: number;
}
export const AccountPopUp = (props: PopUp) => {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: "1",
        top: props.top,
        left: props.left,
      }}
    >
      {props.show && (
        <div>
          <div>
            <a href="">
              <div>
                <img src="" alt="" />
                <span>Hassane Ben</span>
              </div>
            </a>
            <div></div>
            <div>See all profiles</div>
          </div>
          <div>
            <img src="" alt="  " />
            <span>Settings & privacy</span>
          </div>
          <div>
            <img src="" alt="  " />
            <span>Help & support</span>
          </div>
          <div>
            <img src="" alt="  " />
            <span>Display & accessibility</span>
          </div>
          <div>
            <img src="" alt="  " />
            <span>Give feedback</span>
          </div>
          <div>
            <img src="" alt="  " />
            <span>Log Out</span>
          </div>
        </div>
      )}
    </div>
  );
};
