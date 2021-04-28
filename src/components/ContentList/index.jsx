const ContentList = ({ content }) => {
  return (
    <ul>
      {content.map((character) => (
        <img
          key={character.id}
          src={character.image}
          alt="Where are Rick n Morty?"
        />
      ))}
    </ul>
  );
};

export default ContentList;
