import { useCallback, useState } from "react";

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([]);
  const setError = useState("")[1];

  const fetchImages = useCallback(
    async (search) => {
      try {
        const res = await fetch(
          `https://rickandmortyapi.com/api/character/?name=${search}`
        );
        const { results } = await res.json();
        const firstTenImages = results.slice(10);

        setImgList(firstTenImages);
      } catch (error) {
        setError(error);
      }
    },
    [setImgList, setError]
  );

  // TODO: Put fetchMore method here

  return [imgList, fetchImages];
};
