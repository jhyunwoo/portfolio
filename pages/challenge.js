import Image from 'next/image';
import refree from '../public/Massimo_Busacca,_Referee,_Switzerland_(10).jpg';
import Link from 'next/link';

export default function Challenge() {
  return (
    <div className={'w-full h-screen bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24'}>새로운 분야 도전과 경험</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl'}>
          <div className={'text-2xl font-semibold m-2'}>축구 심판</div>
          <div>
            <Image
              src={refree}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl'}>
              학생회에서 진행하는 FB리그에서 축구 주심으로 활동하고 있습니다. 처음 주심을 보기 위해
              축구 규칙을 공부하고 관련 영상을 찾아보며 축구 경기의 흐름과 규칙에 대해
              공부하였습니다. 기존에 축구에 큰 관심이 없어서 규칙과 경기 방식을 이해하는데 시간이
              걸리고 처음 축구 주심을 볼 때 실수도 했지만 연습을 거듭하면서 점점 발전할 수
              있었습니다. 기존에는 할 수 있을까 하던 축구 심판을 도전하고 최선을 다해보니 완벽하지는
              않지만 최선을 다해 축구 경기를 운영할 수 있었습니다.
            </p>
          </div>
        </div>
      </div>
      <div
        className={
          'bg-gray-100 shadow-2xl mx-24 rounded-2xl p-4 hover:bg-blue-500 hover:text-white duration-300 transition'
        }
      >
        <Link href={'/'}>
          <div className={'text-center text-xl font-bold'}>홈페이지</div>
        </Link>
      </div>
    </div>
  );
}
