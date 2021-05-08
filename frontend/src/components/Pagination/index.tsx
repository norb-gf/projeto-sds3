import { Console } from "node:console";
import { SalePage } from "types/sale";

type Props = {
  page: SalePage;
  onPageChange: Function;
};

const Pagination = ( { page, onPageChange } : Props) => {

  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${page.first ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page.number - 1)}>Anterior</button>
            <h1> {console.log("Pagination1: " + page.number)}</h1>
          </li>
          <li className="page-item disabled">
            <span className="page-link">{page.number + 1}</span>
            <h1> {console.log("Pagination2: " + page.number)}</h1>
          </li>
          <li className={`page-item ${page.last ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => onPageChange(page.number + 1)}>Próxima</button>
            <h1> {console.log("Pagination3: " + page.number)}</h1>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;  
