import Image from 'next/image';
import st from '../public/photo_2022-11-14_13-03-59.jpg';
import Link from 'next/link';

export default function InCNSA() {
  return (
    <div className={'w-full h-screen bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24'}>큰사에서 기억에 남는 활동</div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl'}>
          <div className={'text-2xl font-semibold m-2'}>Student Teacher</div>
          <div>
            <Image
              src={st}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl'}>
              Student Teacher 활동을 통해 친구들과 같이 수업을 준비하며 협동력을 발전 시킬 수 있었고 아직 IT 과정을 밟지 않은 1학년 학생의 눈높이를 기준으로 수업을 구상하는 경험을 할 수 있었습니다. 수업을 진행하면서 다른 사람에게 지식을 공유하는 것이 쉽지 않다는 것을 느끼고 기존에 알았던 지식을 좀 더 심도있게 공부할 수 있었습니다. 또한 1학년 학생들의 고민을 들으며 작년에 고민했던 경험을 떠올릴 수 있었습니다.
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
