import Categories from "./components/categories/categories.component";

const App = () => {
  // initialise variable array, array that reflects what we have in categories
  const categories = [
    {
      id: 1,
      title: "High Protein",
      imageUrl: "https://via.placeholder.com/150/771796",
    },
    {
      id: 2,
      title: "Five Ingredients",
      imageUrl: "https://via.placeholder.com/150/771796",
    },
    {
      id: 3,
      title: "Low Carb",
      imageUrl: "https://via.placeholder.com/150/771796",
    },
    {
      id: 4,
      title: "Monthly Meals",
      imageUrl: "https://via.placeholder.com/150/771796",
    },
    {
      id: 5,
      title: "Plant Based",
      imageUrl: "https://via.placeholder.com/150/771796",
    },
  ];

  // whenever we map through things we want to use the id
  return <Categories key={categories.id} categories={categories} />;
};

export default App;
