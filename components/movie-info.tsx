import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

// 영화 정보를 가져오는 함수
export async function getMovie(id: string) {
    //await new Promise((resolve) => setTimeout(resolve, 3000)); // 지연 시간 추가 (예: API 호출 대기)
    const response = await fetch(`${API_URL}/${id}`, { cache: "no-store" }); // 최신 데이터 가져오기
    if (!response.ok) {
        throw new Error("Failed to fetch movie data");
    }
    return response.json();
}

// 서버 컴포넌트: 영화 정보 표시
export default async function MovieInfo({ id }: { id: string }) {
  try {
    const movie = await getMovie(id); // 영화 정보 가져오기
    return (
      <div className={styles.container}>
        <img src={movie.poster_path} className={styles.poster} alt={movie.title} />
        <div className={styles.info}>
          <h1 className={styles.title}>{movie.title}</h1>
          <h3>⭐ {movie.vote_average.toFixed(1)}</h3>
          <p>{movie.overview}</p>
          <a href={movie.homepage} target={"_blank"}>Homepage &rarr;</a>
        </div>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return <h6>Failed to load movie information</h6>; // 에러 메시지 표시
  }
}
