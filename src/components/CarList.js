import { useSelector, useDispatch } from 'react-redux';

function CarList() {
    return (
      <div className='car-list'>
        <p>
          car name 
        </p>
        <button
          className="button is-danger"
        >
          Delete
        </button>
      </div>
    );
}

export default CarList;


    