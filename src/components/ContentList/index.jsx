const ContentList = ({ content }) => {
  return (
    <ul>
      {content.map((character, index) => (
        <img
          key={character.id + character.name + index}
          src={character.image}
          alt="Where are Rick n Morty?"
        />
      ))}
    </ul>
  );
};

export default ContentList;
