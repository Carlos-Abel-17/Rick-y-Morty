import Card from "./Card";
import '../css/StyleCards.css'



export default function Cards({characters, onClose}) {
  
  return (
    <div className="todo">
    
      {characters.map((character) => (
        <Card
          key={character.id}
         character={character}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
