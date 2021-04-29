import { useCallback, useState } from "react";

export const useFetchContent = () => {
  const [imgList, setImgList] = useState([]);
  const [fetchMoreInfo, setFetchMoreInfo] = useState({
    count: 0,
    lastImageIndex: 0,
    currentPage: "",
    nextPage: "",
  });
  const setError = useState("")[1];

  const secureFetch = useCallback(
    (fetch, ...rest) => {
      try {
        fetch(...rest);
      } catch (error) {
        setError(error);
      }
    },
    [setError]
  );

  const fetchInitialImages = useCallback(
    async (search) => {
      const currentPage = `https://rickandmortyapi.com/api/character/?name=${search}`;
      const res = await fetch(currentPage);
      const {
        info: { count, next: nextPage },
        results,
      } = await res.json();
      const lastImageIndex = 10;
      const firstTenImages = results.slice(0, lastImageIndex);

      setImgList(firstTenImages);
      setFetchMoreInfo({
        count,
        lastImageIndex,
        currentPage,
        nextPage,
      });
    },
    [setImgList, setFetchMoreInfo]
  );

  const fetchInitial = useCallback(
    (search) => secureFetch(fetchInitialImages, search),
    [secureFetch, fetchInitialImages]
  );

  const fetchMoreImages = useCallback(async () => {
    if (!fetchMoreInfo.nextPage) return;

    const res = await fetch(fetchMoreInfo.currentPage);
    const {
      info: { next: nextPage },
      results,
    } = await res.json();
    const lastImageIndex = fetchMoreInfo.lastImageIndex;
    const updatedLastIndex = lastImageIndex + 10;
    const nextTenImages = [
      ...imgList,
      ...results.slice(lastImageIndex, updatedLastIndex),
    ];
    const isPageEnd = updatedLastIndex >= results.length;

    setImgList(nextTenImages);
    setFetchMoreInfo({
      count: fetchMoreInfo.count,
      lastImageIndex: isPageEnd ? 0 : updatedLastIndex,
      currentPage: isPageEnd
        ? fetchMoreInfo.nextPage
        : fetchMoreInfo.currentPage,
      nextPage,
    });
  }, [fetchMoreInfo, imgList, setImgList, setFetchMoreInfo]);

  const fetchMore = useCallback(() => secureFetch(fetchMoreImages), [
    secureFetch,
    fetchMoreImages,
  ]);

  return [imgList, fetchInitial, fetchMore, fetchMoreInfo];
};
