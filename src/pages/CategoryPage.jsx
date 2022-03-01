import { Itemlistcontainer } from "../components/Itemlistcontainer";
import { useParams } from "react-router-dom";


const CategoryPage = () => {
  const { categoryId } = useParams();
  return (
    <div>
      {Number(categoryId) === 2 ? <h1>Cervezas</h1>:<h1>Probioticos</h1>}
      <Itemlistcontainer />
    </div>
  );
};

export default CategoryPage;