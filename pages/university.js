import Image from 'next/image';
import st from '../public/computer.jpg';
import Link from 'next/link';

export default function University() {
  return (
    <div className={'w-full bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24 dark:text-white'}>희망 학과</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl dark:bg-gray-800'}>
          <div className={'text-2xl font-semibold m-2 dark:text-white'}>컴퓨터 공학과/과학과</div>
          <div>
            <Image
              src={st}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl dark:text-white'}>
              컴퓨터 과학과는 알고리즘, 계산 과정에 대해 학습하고 컴퓨터 소프트웨어에 집중하여
              연구하는 학문입니다. 컴퓨터가 연산하는 구조, 컴퓨터 그래픽, 알고리즘 등을 연구하여
              소프트웨어적 활용을 추구합니다. 컴퓨터공학은 이론적인 측면에서의 기반 기술 연구와 이를
              실생활에 직접 응용할 수 있는 응용 연구를 추구하고 있습니다. 현대의 모든 산업들은 점차
              그 복잡도가 증가함에 따라 컴퓨터를 통한 문제 해결을 시도하고 있습니다. 컴퓨터공학은
              이러한 융합적, 통섭적 사고와 연구를 주도하고 있으며, 이를 통해 산업 전반에 걸쳐
              영향력을 확대하고 있습니다.
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
