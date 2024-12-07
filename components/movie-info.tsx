import { API_URL } from "../app/(home)/page";

// 영화 정보를 가져오는 함수
async function getMovie(id: string) {
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
      <div>
        <h6>Movie Info:</h6>
        <pre>{JSON.stringify(movie, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return <h6>Failed to load movie information</h6>; // 에러 메시지 표시
  }
}
