import { Itemlistcontainer } from "../components/Itemlistcontainer";
import { useParams } from "react-router-dom";
import './styles_pages/Category.scss';


const CategoryPage = () => {
  const { categoryId } = useParams();
  return (
    <div>
      <div className="title">
        {Number(categoryId) === 1 && (
          <span className="font-title">Probióticos</span>
        )}
        {Number(categoryId) === 2 && (
          <span className="font-title">Cervezas</span>
        )}
        {Number(categoryId) === 3 && (<span className="font-title">Quesos</span>)}
      </div>
      <Itemlistcontainer />
    </div>
  );
};

export default CategoryPage;