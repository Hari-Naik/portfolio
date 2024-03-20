import appData from "../../data/app.json";

const DefaultFooter = ({ extraClass }) => {
  return (
    <>
      {/* footer */}
      <footer className="mil-fw row">
        <p className="mil-light-soft">{appData.footer.copy}</p>
        <p
          className="mil-light-soft"
          dangerouslySetInnerHTML={{ __html: appData.footer.dev }}
        />
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;
