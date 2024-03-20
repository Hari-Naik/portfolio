const AboutSection = ({ data }) => {
  return (
    <>
      {/* about */}
      <section id="about" className="mil-p-0-90">
        <div className="mil-oval-frame-2 mil-mb-90">
          <img src={data.avatar.url} alt={data.title} />
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="mil-center">
              <h2
                className="mil-up mil-mb-30"
                dangerouslySetInnerHTML={{
                  __html: `Hi! My name is ${data.name}, <br/>i’m ${data.title} based in ${data.address}`,
                }}
              />
              <div className="mil-quote mil-up mil-mb-30">
                <i className="fas fa-quote-left" />
              </div>
              <p className="mil-up mil-mb-30">{data.description}</p>
              <img
                src={data?.signature?.image}
                alt={data?.signature?.alt}
                className="mil-up mil-sign"
              />
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
    </>
  );
};

export default AboutSection;
