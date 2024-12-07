import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

export default async function MovieDetail({
    params,
  }: {
    params: { id: string };
  }) {
    const id = (await params).id; // params가 비동기적인 경우에도 처리
    //const [movie, videos] = await Promise.all( [getMovie(id), getVideos(id)] );

    return (
      <div>
        <h3>Movie detail page</h3>
        <Suspense fallback={<h1>Loading movie info</h1>}>
          <MovieInfo id={id} />
        </Suspense>
        <h4>Videos</h4>
        <Suspense fallback={<h1>Loading movie videos</h1>}>
          <MovieVideos id={id} />
        </Suspense>
      </div>
    );
}
