import Image from 'next/image';
import alan from '../public/Alan_Turing.jpg';
import Link from 'next/link';

export default function Respectperson() {
  return (
    <div className={'w-full h-screen bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24'}>존경하는 인물</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl'}>
          <div className={'text-2xl font-semibold m-2'}>앨런 매시슨 튜링</div>
          <div>
            <Image
              src={alan}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl'}>
              앨런 튜링은 잉글랜드의 컴퓨터과학자입니다. 앨런 튜링은 세계 제 2차 대전에서 독일군의
              암호 에니그마를 해독하였으며 이를 통해 컴퓨터과학 분야 발전에 엄청난 영향을 미쳤다.
              많은 사람의 생명을 살리기 위해 끝까지 암호 해독을 포기하지 않고 컴퓨터과학 분야에
              지대한 공을 세운 점이 존경받아 마땅할 인물이라 생각되어 선정하였다.
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
