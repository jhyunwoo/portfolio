import Image from 'next/image';
import sapatrip from '../public/photo_2022-11-14_12-48-54.jpg';
import st from '../public/photo_2022-11-14_13-03-59.jpg';
import alan from '../public/Alan_Turing.jpg';

export default function Introduce() {
  return (
    <div className="bg-gray-50 w-full dark:bg-gray-900">
      <div className="w-full py-24 bg-gray-100 items-center flex p-4 dark:bg-gray-900">
        <div className="text-4xl font-bold dark:text-white ml-8">나를 소개합니다 - 전현우</div>
      </div>
      <div>
        <div className="transition flex flex-col p-4 bg-gray-50 dark:bg-gray-900">
          <div className="transition ml-8 text-4xl font-bold dark:text-white">행복했던 순간들</div>
          <div className="transition my-4 text-xl font-semibold p-2 ">
            <div className=" bg-gray-50 shadow-lg p-2 rounded-xl hover:ring-4 hover:ring-offset-4 transition hover:ring-sky-400 dark:bg-gray-800 hover:dark:ring-sky-800 dark:text-white dark:ring-offset-gray-800">
              <div className="transition font-bold text-2xl text-center">Sapa Trip</div>
              <Image src={sapatrip} alt="sapa" className="mx-auto w-96 rounded-lg m-4"></Image>
              <div className="transition my-2 ml-4 text-base text-center">
                베트남 문화 체험 & 수상 액티비티
              </div>
            </div>
          </div>
        </div>
        <div className="transition flex flex-col p-4 bg-gray-50 dark:bg-gray-900">
          <div className="transition ml-8 text-4xl font-bold dark:text-white">희망 학과</div>
          <div className="transition my-4 text-xl font-semibold p-2 ">
            <div className=" bg-gray-50 shadow-lg p-2 rounded-xl hover:ring-4 hover:ring-offset-4 items-center transition flex flex-col hover:ring-sky-400 dark:bg-gray-800 hover:dark:ring-sky-800 dark:text-white dark:ring-offset-gray-800">
              <div className="transition font-bold text-2xl text-center my-2">컴퓨터 과학과</div>

              <div className="transition my-2 ml-4 text-base text-start mt-6 w-2/3">
                컴퓨터 과학과는 알고리즘, 계산 과정에 대해 학습하고 컴퓨터 소프트웨어에 집중하여
                연구하는 학문입니다. 컴퓨터가 연산하는 구조, 컴퓨터 그래픽, 알고리즘 등을 연구하여
                소프트웨어적 활용을 추구합니다.
              </div>
            </div>
          </div>
        </div>
        <div className="transition flex flex-col p-4 bg-gray-50 dark:bg-gray-900">
          <div className="transition ml-8 text-4xl font-bold dark:text-white">
            큰사에서 기억에 남는 활동
          </div>
          <div className="transition my-4 text-xl font-semibold p-2 ">
            <div className=" bg-gray-50 shadow-lg p-2 rounded-xl hover:ring-4 hover:ring-offset-4 items-center transition flex flex-col hover:ring-sky-400 dark:bg-gray-800 hover:dark:ring-sky-800 dark:text-white dark:ring-offset-gray-800">
              <div className="transition font-bold text-2xl text-center my-2">Student Teacher</div>
              <Image src={st} alt="st" className="mx-auto w-96 rounded-lg m-4"></Image>
              <div className="transition my-2 ml-4 text-base text-start mt-6 w-2/3 ">
                2학년 학생이 선생님이 되어 자기 전공에 관련된 수업을 1학년한테 진행하는 활동입니다.
                2학년은 자기 전공에 대한 깊이 있는 이해와 발표 능력을 키울 수 있는 기회였고 1학년
                학생들한테는 2학년 전공 선택에 도움이 되는 기회였습니다.
              </div>
            </div>
          </div>
        </div>

        <div className="transition flex flex-col p-4 bg-gray-50 dark:bg-gray-900">
          <div className="transition ml-8 text-4xl font-bold dark:text-white">존경하는 인물</div>
          <div className="transition my-4 text-xl font-semibold p-2 ">
            <div className=" bg-gray-50 shadow-lg p-2 rounded-xl hover:ring-4 hover:ring-offset-4 items-center transition flex flex-col hover:ring-sky-400 dark:bg-gray-800 hover:dark:ring-sky-800 dark:text-white dark:ring-offset-gray-800">
              <div className="transition font-bold text-2xl text-center my-2">앨런 매시슨 튜링</div>
              <Image src={alan} alt="alan" className="mx-auto w-96 rounded-lg m-4"></Image>
              <div className="transition my-2 ml-4 text-base text-start mt-6 w-2/3 ">
                앨런 튜링은 잉글랜드의 컴퓨터과학자입니다. 앨런 튜링은 세계 제 2차 대전에서 독일군의
                암호 에니그마를 해독하였으며 이를 통해 컴퓨터과학 분야 발전에 엄청난 영향을 미쳤다.
                많은 사람의 생명을 살리기 위해 끝까지 암호 해독을 포기하지 않고 컴퓨터과학 분야에
                지대한 공을 세운 점이 존경받아 마땅할 인물이라 생각되어 선정하였다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
