import Image from 'next/image';
import st from '../public/steve.jpeg';
import Link from 'next/link';

export default function InCNSA() {
  return (
    <div className={'w-full bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24 dark:text-white'}>나의 책 소개</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl dark:bg-gray-800'}>
          <div className={'text-2xl font-semibold m-2 dark:text-white'}>스티브 잡스</div>
          <div>
            <Image
              src={st}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl dark:text-white'}>
              애플의 공동 창업자 중 한 명이자 모바일 디바이스의 패러다임을 바꾼 스티브 잡스의 인생을
              담고 있는 &#39;스티브 잡스&#39;를 추천합니다. 스티브 잡스에 대한 거의 모든 내용을 담고
              있어 분량이 길지만 스티브 잡스가 걸었던 인생을 이해할 수 있고 아이폰과 아이패드 등
              애플의 발전 과전 또한 볼 수 있어 저에게 매우 인상깊었습니다. 창업을 생각하고 있는
              친구라면 한 번 읽어보면 좋을 것 같습니다.
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
