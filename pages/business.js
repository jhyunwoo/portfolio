import Image from 'next/image';
import DNN from '../public/dnn.png';
import socar from '../public/socar.jpg';
import robot from '../public/robot.jpg';
import fire from '../public/fire.png';
import airconditioner from '../public/airconditioner.jpg';
import Link from 'next/link';

export default function Business() {
  return (
    <div className={'w-full bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24 dark:text-white'}>창업 아이디어</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl dark:bg-gray-800'}>
          <div className={'text-4xl font-bold m-2 my-24 dark:text-white text-center'}>
            스마트폰 센서를 활용하여 건물 안에서 정확한 위치를 파악할 수 있는 소프트웨어
          </div>
          <div>
            <p
              className={
                'text-2xl font-semibold dark:text-white mt-8 mb-2 border-b-2 border-black dark:border-white p-2'
              }
            >
              아이디어
            </p>
            <p className={'text-xl dark:text-white'}>
              스마트폰에 탑제된 가속도, 자이로, 고도 센서 등을 활용하여 사용자가 건물 안에 있더라도
              인공지능 기술을 활용한 위치 특정 기술로 정확한 위치를 파악할 수 있게 한다. 이러한
              기술을 통해 택배나 배달 서비스가 사용자의 위치까지 직접 도달할 수 있으며 건물 안에서
              활동하는 로봇의 위치를 특정하고 자율 주행을 학습하는데 큰 도움이 될 것이다.
            </p>
            <p
              className={
                'text-2xl font-semibold dark:text-white mt-12 mb-2 border-b-2 border-black dark:border-white p-2'
              }
            >
              아이디어 근거
            </p>
            <p className="text-xl font-semibold dark:text-white my-2 mt-8">관련 사례</p>
            <Image src={socar} alt="socar" className="m-4 w-3/5 mx-auto"></Image>

            <p className={'text-xl dark:text-white'}>
              차량 대여 서비스인 쏘카는 차량에 탑제된 센서로 차량이 GPS 신호가 잡히지 않는 지하
              주차장으로 들어가더라도 차량의 위치를 정확하게 특정할 수 있다. 쏘카의 차량 위치 특정
              기술에는 자이로 센서, 블랙 박스 등이 사용된다. 최신 스마트폰의 경우 다양한 센서(자이로
              센서, 가속도 센서, 기울기 센서, 압력 센서, 조도 센서 등)을 탑제하고 있어 센서의
              데이터를 활용한 소프트웨어만 개발된다면 현재 스마트폰에도 바로 적용시킬 수 있다.
            </p>
            <Link href="https://www.hani.co.kr/arti/economy/it/1025046.html ">
              <div className="bg-blue-600 text-center p-2 rounded-lg text-xl font-bold text-white m-4 hover:bg-blue-700 transition duration-300">
                관련 기사
              </div>
            </Link>
            <p className="text-xl font-semibold dark:text-white my-2 mt-8">인공지능 기술의 활용</p>
            <Image src={DNN} alt="dnn algorithm" className="m-4 w-3/5 mx-auto"></Image>
            <p className={'text-xl dark:text-white '}>
              DNN, RNN 등 딥러닝 알고리즘을 사용하여 사용자가 위치한 층수, 위치 등을 파악할 수
              있도록 학습한다. 위치의 경우에는 자이로 센서와 가속도 센서의 값을 활용하여 사용자의
              동선을 시각화 할 수 있다면 CNN 알고리즘도 학습에 활용가능할 것이다. 딥러닝 알고리즘을
              학습시키기 위한 데이터를 모으기 위해선 다양한 경우의 수를 학습해야 하기 때문에 지도
              앱이나 운영체제 자체에서 데이터를 얻어야 할 것으로 생각된다.{' '}
            </p>

            <p
              className={
                'text-2xl font-semibold dark:text-white mt-12 mb-2 border-b-2 border-black dark:border-white p-2'
              }
            >
              기대 효과
            </p>
            <p className="text-xl font-semibold dark:text-white my-2 mt-8">배달 서비스 질 향상</p>
            <Image src={robot} alt="robot" className="m-4 w-3/5 mx-auto"></Image>

            <p className={'text-xl dark:text-white'}>
              로봇을 사용하는 배달이 활성화 될 경우 사용자의 위치에 기반하여 사용자 바로 앞까지
              물건이나 식품을 배달할 수 있을 것이다. 기존에 사용자가 문 앞까지 나가거나 대표적인
              장소로 나가야했던 불편한 점을 해결할 수 있어 사용자의 배달 서비스 만족도를 높일 수
              있을 것이다.
            </p>

            <p className="text-xl font-semibold dark:text-white my-2 mt-8">
              위급 상황시 환자의 위치 파악 시간 단축
            </p>
            <Image src={fire} alt="dnn algorithm" className="m-4 w-3/5 mx-auto"></Image>

            <p className={'text-xl dark:text-white'}>
              건물 안에서 위급 상황 발생시 GPS 신호만으로는 환자의 정확한 위치를 특정할 수 없다.
              만약 이 기술이 활성화 된다면 신고 전화 만으로 건물 안 사용자의 위치를 정확하게
              파악하여 병원 이송에 소요되는 시간을 단축시킬 수 있을 것이다.
            </p>

            <p className="text-xl font-semibold dark:text-white my-2 mt-8">
              건물 안 혼잡도를 활용한 효율적 냉난방과 관리
            </p>
            <Image src={airconditioner} alt="airconditioner" className="m-4 w-3/5 mx-auto"></Image>

            <p className={'text-xl dark:text-white'}>
              건물 안에 위치한 사용자의 이동 동선과 위치를 파악할 수 있다면 건물 냉난방 시스템에
              적용하여 에너지 효율성을 높일 수 있을 것이다. 또한 사용자가 몰리는 구역에 엘레베이터를
              많이 배치하여 혼잡도를 줄이는 역할도 할 수 있을 것이다.
            </p>

            <p
              className={
                'text-2xl font-semibold dark:text-white mt-12 mb-2 border-b-2 border-black dark:border-white p-2'
              }
            >
              해결해야 하는 문제점
            </p>
            <p className="text-xl font-semibold dark:text-white my-2 mt-8">학습용 데이터 부족</p>
            <p className={'text-xl dark:text-white'}>
              사용자의 위치를 특정하기 위해 자이로 센서와 가속도 센서 등을 사용한다면 기존에는 해당
              데이터를 바탕으로 하는 데이터 셋이 없기 때문에 데이터 셋을 처음부터 만들어야 한다.
              따라서 학습 모델이 개발된다고 하더라도 데이터 셋을 모으기 위해 시간이 오래 걸릴것이다.
              데이터를 어떻게 효율적으로 수집할 수 있을지에 관한 문제를 해결해야 한다.
            </p>
            <p className="text-xl font-semibold dark:text-white my-2 mt-8">
              스마트폰 기기별 센서의 편차
            </p>
            <p className={'text-xl dark:text-white'}>
              최신 스마트폰에는 많은 센서가 탑제되지만 일부 스마트폰에는 특정 센서가 빠져있는 경우가
              있다. 이러한 경우 우리가 학습시킨 모델로는 정확한 위치 특정이 불가능 하며 일부
              기기에서는 기능 자체를 사용하지 못할 수 있다. 또한 스마트폰의 기종마다 사용하는 센서가
              다르고 편차가 있기 때문에 스마트폰에서 얻은 데이터와 학습에 사용된 데이터의 특성이
              다를 수 있다. 따라서 이 편차를 줄일 수 있도록 해야한다.
            </p>
            <p className="text-xl font-semibold dark:text-white my-2 mt-8">
              건물 내 정확한 위치 특정의 어려움
            </p>
            <p className={'text-xl dark:text-white'}>
              층수의 경우 고도 센서와 자이로 센서로 대략적인 위치 파악이 가능하지만 건물의 설계도가
              있지 않은 이상 건물 안에서 사용자가 어느 방에 위치한지 특정할 수 없다. 사용가 위치한
              대략적인 위치는 파악할 수는 있겠지만 어떤 방에 위치한지는 알 수 없다. 이는 건물 관리
              담당자와 협력하여 문제를 해결해야 할 것 같다.
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          'bg-gray-100 shadow-2xl mx-24 rounded-2xl p-4 hover:bg-blue-500 hover:text-white duration-300 transition  dark:bg-gray-700 dark:text-white mb-12'
        }
      >
        <Link href={'/'}>
          <div className={'text-center text-xl font-bold'}>홈페이지</div>
        </Link>
      </div>
    </div>
  );
}
