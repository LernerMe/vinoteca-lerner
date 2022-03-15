import react from 'react';

const FunctionalComponent = ({nombre, apellido}) => {
    return (
        <div>
            <h3>Functional Component</h3>
            <h2>{nombre} {apellido}</h2>
        </div>

    );
};

export default FunctionalComponent;
