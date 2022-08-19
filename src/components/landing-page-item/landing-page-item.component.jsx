import "./landing-page-item.styles.scss";

const LandingPageItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className="landing-page-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default LandingPageItem;
