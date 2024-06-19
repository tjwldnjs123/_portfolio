import { CiLink } from "react-icons/ci";
import SimpleLineChart from "../../utils/SimpleLineChart";

function AboutMe() {
  const chartData = [
    {
      name: "2021",
      성장률: 5,
      description:
        "코딩 독학을 통해 기초 프로그래밍 언어와 개념을 습득하며 첫 걸음을 뗐다. 온라인 강의와 프로젝트를 통해 실력을 쌓았고, 꾸준한 연습으로 자신감을 얻었다. 스스로 문제를 해결하는 능력을 키우며 성장의 기쁨을 느꼈다.",
    },
    {
      name: "2022",
      성장률: 15,
      description:
        "부트캠프에 참여해 집중적인 교육을 받으며 단기간에 많은 것을 배웠다. 팀 프로젝트를 통해 협업의 중요성을 깨달았고, 실제 사례 기반의 학습으로 실무 능력을 향상시켰다. 멘토링과 네트워킹을 통해 업계 인사이트를 얻었다.",
    },
    {
      name: "2023",
      성장률: 30,
      description:
        "아이테크에서 첫 직장 생활을 시작하며 실제 업무 환경에 적응했다. 다양한 프로젝트에 참여하며 실무 경험을 쌓았고, 팀원들과의 협업을 통해 전문성을 높였다. 지속적인 학습과 자기 개발로 기술 스택을 확장했다.",
    },
    {
      name: "2024",
      성장률: 60,
      description:
        "테크랩스에서의 경험은 기술적 깊이와 리더십을 동시에 키울 수 있는 기회였다. 중요한 프로젝트를 주도하며 책임감을 느꼈고, 문제 해결 능력이 크게 향상되었다. 빅데이터와 데이터 시각화에 대한 이해를 넓히며 커리어를 한 단계 도약시켰다.",
    },
    {
      name: "future!!",
      성장률: 100,
      description:
        "미래에는 기술과 경험을 바탕으로 더욱 혁신적인 프로젝트를 주도하며 업계의 리더로 자리매김할 것이며 최신 기술 트렌드와 도구들을 활용해 지속적으로 성장하며 지속적인 학습과 자기 개발을 통해 전문가로서의 입지를 확고히 하고 후배 개발자들에게 멘토링을 제공하며 업계의 발전에 기여할 것이다.",
    },
  ];

  return (
    <div id="aboutme" className="h-screen">
      <div>
        <div className="flex justify-center items-center mb-10">
          <CiLink size={50} color="gray" />
          <p className="text-5xl ">ABOUT ME</p>
        </div>
        <div className="text-center mb-10">
          <p>안녕하세요, 가파른 성장곡선을 그리는 개발자</p>
          <div>
            <span>서지원</span>입니다.
          </div>
          <p className="text-[14px] mt-2 text-gray-500">
            (차트에 마우스 오버시 상세내용이 나옵니다.)
          </p>
        </div>

        <div className="w-[80%] h-full mx-auto">
          <SimpleLineChart data={chartData} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
