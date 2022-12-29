import Image from 'next/image';
import poster from '../public/research-poster.jpg';
import Link from 'next/link';

export default function Research() {
  return (
    <div className={'w-full bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24 dark:text-white'}>학생탐구활동</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl dark:bg-gray-800'}>
          <div className={'text-2xl font-semibold m-2 dark:text-white'}>
            영상 데이터에서의 YOLO V7 기반 객체 탐지 정확도 향상에 관한 연구
          </div>
          <div>
            <Image
              src={poster}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl dark:text-white mt-4'}>
              딥러닝과 컴퓨터 비전에 관심을 가지고 실시간 객체 탐지에 대해 연구를 진행하였다. 실시간
              객체 탐지를 위해 객체 탐지 속도가 빠른 YOLO 알고리즘을 사용하여 영상에서 객체 탐지를
              실험해 보았다. 실험 과정 중 YOLO 알고리즘이 객체의 속도로 인해 나타나는 모션 블러
              현상과 영상 촬영 장비의 상태에 영향을 받아 생기는 가우시안 블러 현상이 일어나면 객체
              탐지가 끊기는 점을 발견하였다. 이를 개선하기 위해 MS COCO 데이터셋을 사용하여 모션
              블러 현상이 일어난 이미지와 가우시안 블러 현상이 일어난 이미지를 학습 데이터셋으로
              제작하였다. 해당 데이터 셋을 YOLO V7으로 학습하여 YOLO V7 모델이 극단적인 조건에서도
              객체를 탐지할 수 있도록 하였다. 학습 결과 모션 블러 현상이 일어난 이미지와 가우시안
              블러 현상이 일어난 이미지에서 더 높은 정확도를 보였다. 그러나 일반적인 이미지에서는
              기존 모델이 더 높은 정확도를 보였다. 이 점을 개선하기 위해 후속 연구를 기획하였다.
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
