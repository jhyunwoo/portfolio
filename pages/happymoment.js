import Image from 'next/image';
import st from '../public/sapa.jpg';
import Link from 'next/link';

export default function HappyMoment() {
  return (
    <div className={'w-full bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24 dark:text-white'}>행복했던 순간들</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl dark:bg-gray-800'}>
          <div className={'text-2xl font-semibold m-2 dark:text-white'}>Sapa Trip</div>
          <div>
            <Image
              src={st}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl dark:text-white'}>
              베트남에 위치한 사파 산으로 친구들과 함께 수학 여행을 갔습니다. 사파에서 현지 문화를
              체험하고 다양한 음식을 먹어볼 수 있어서 좋았습니다.
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
