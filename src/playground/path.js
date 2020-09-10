import path from 'path';


const pathVariable = props ? '' : 'universal';
const dist = path.join('https://www.kombatakademy.com/wp-content/uploads/mortal-kombat-11/notation', pathVariable, 'right')

export default() => (
    <div>
        <img
            alt={"Forward"}
            src={`${dist}.png`}
            className={'universal'}
        />
    </div>
);

