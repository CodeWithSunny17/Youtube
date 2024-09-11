import Accordian from "./Accordian";

const Sidebar = ({ openBar,toggleOpen }) => {
  return (
    <div className={`h-[100vh]`}>
      <div
        className={`fixed top-0 left-0 h-full  w-[35%] md:w-[20%] text-white transform transition-transform duration-300 ease-in-out ${
          openBar ? "translate-x-0" : "-translate-x-full"
        } overflow-hidden group`}
      >
        <div className="h-full overflow-y-auto pb-4  custom-scrollbar">
          <Accordian toggleOpen={toggleOpen} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
