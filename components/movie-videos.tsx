import { API_URL } from "../app/(home)/page";

// 비디오 데이터를 가져오는 함수
async function getVideos(id: string) {
  //await new Promise((resolve) => setTimeout(resolve, 3000)); // 지연 시간 추가 (예: API 호출 대기)
  const response = await fetch(`${API_URL}/${id}/videos`, { cache: "no-store" }); // 최신 데이터 가져오기
  if (!response.ok) {
    throw new Error("Failed to fetch videos");
  }
  return response.json();
}

export default async function MovieVideos({ id }: { id: string }) {
  try {
    const videos = await getVideos(id); // 비디오 데이터 가져오기
    return (
      <div>
        <h6>Videos:</h6>
        <pre>{JSON.stringify(videos, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    console.error("Error fetching videos:", error);
    return <h6>Failed to load videos</h6>; // 에러 처리
  }
}
