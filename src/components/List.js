import react from "react";

const List = ({people}) => {
    return (

        // Itero con el metodo map en mi listado de people 
        // Luego lo articulo
        
        <>

            {/* Guardo en una const las variables que fueron iteradas */}
            {people.map((person) => {
                const{id, name, age, image} =  person;

            return <article key={id} className="person">
                <img src={image} alt={name}/>
                <div>
                    <h4>{name}</h4>
                    <span>{age} años</span>
                </div>
            </article>
            })}
        </>
    );
}


export default List;