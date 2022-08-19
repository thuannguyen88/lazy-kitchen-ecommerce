import "./landing-page-categories.styles.scss";
import LandingPageItem from "../landing-page-item/landing-page-item.component";

function LandingPageCategories({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => (
        <LandingPageItem key={category.id} category={category} />
      ))}
    </div>
  );
}

export default LandingPageCategories;
