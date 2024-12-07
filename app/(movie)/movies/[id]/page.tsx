import { Metadata } from "next";
import { Suspense } from "react";
import MovieInfo, { getMovie } from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

// 메타데이터 생성
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params; // `await`로 비동기 처리
  const movie = await getMovie(id);

  return {
    title: movie.title,
  };
}

// 페이지 컴포넌트
export default async function MovieDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // `await`로 비동기 처리

  return (
    <main>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
    </main>
  );
}
