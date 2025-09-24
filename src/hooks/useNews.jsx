"use client";

import { useState, useEffect } from "react";
import { mockNews } from "@/data/mockNews";

const PAGE_SIZE = 9;

export function useNews() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = page * PAGE_SIZE;
    const newItems = mockNews.slice(start, end);

    setNews((prev) => [...prev, ...newItems]);
    if (end >= mockNews.length) setHasMore(false);
  }, [page]);

  /* Uncomment for real API fetching

  useEffect(() => {
    async function fetchNews() {
        const res = await fetch(`/api/news?page=${page}&size=${PAGE_SIZE}`);
        const data = await res.json();
        setNews((prev) => [...prev, ...data]);
        if (data.length < PAGE_SIZE) setHasMore(false);
    }
    fetchNews();
  }, [page]);

  */

  const loadMore = () => setPage((prev) => prev + 1);

  return { news, loadMore, hasMore };
}
