import Image from 'next/image';
import chapter from '../public/cntextbook-chapter.jpg';
import dark from '../public/cntextbook-dark.jpg';
import english from '../public/cntextbook-english.jpg';
import korean from '../public/cntextbook-korean.jpg';
import Link from 'next/link';

export default function CNTextbook() {
  return (
    <div className={'w-full bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24 dark:text-white'}>
        친구들을 위한 영어 학습 앱
      </div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl dark:bg-gray-800'}>
          <div className={'text-2xl font-semibold m-2 dark:text-white'}>CN교과서</div>
          <div>
            <p className={'text-xl dark:text-white'}>
              영어 시험 범위의 지문이 너무 광범위하고 학습해야 하는 지문이 많아 영어 학습에 어려움을
              느꼈다. 영어 지문을 어디에서나 쉽게 외울 수 있도록 하면 영어 공부에 도움이 될 것
              같아서 영어 지문의 한 줄 해석을 볼 수 있는 앱을 개발하였다. 친구들이 영어 시험범위의
              지문을 자주 반복하여 학습할 수 있도록 시험범위의 지문을 각 챕터별로 나누고 영어 지문의
              한국어 해석 문장을 같이 볼 수 있게 UI를 구상하였다. 우리 학교 모든 학생들이 앱을
              사용할 수 있도록 Google Play Store와 AppStore에 출시하였다. 앱 출시 이후 갤럭시
              디바이스에서 영어 지문 부분이 지속적으로 올라가는 오류가 발생하였다. 관련 오류를
              해결하기 위해 몇날몇일을 고생하였다. 친구들의 불편한 점을 개선하기 위해 지속적으로
              노력하고 오류를 해결하여 친구들이 편리하게 앱을 이용할수 있었던 점이 앱 개발을 하면서
              가장 인상깊었다. 더 많은 친구들이 편리하게 영어 공부를 할 수 있도록 2학년 시험 범위
              뿐만 아니라 1학년 시험 범위도 지원하였다. 한 학기 동안 영어 학습 앱을 운영하였다.
              운영하는 기간 동안 약 110명의 학생이 앱을 다운 받아 영어 공부를 하였다. 나의 앱이 많은
              친구들에게 도움이 되었다는 사실이 정말 뿌듯했다.
            </p>
            <Image
              src={chapter}
              alt={'computer science'}
              className={'float-none md:float-left w-40 m-4 rounded-xl'}
            />
            <Image
              src={dark}
              alt={'computer science'}
              className={'float-none md:float-left w-40 m-4 rounded-xl'}
            />
            <Image
              src={english}
              alt={'computer science'}
              className={'float-none md:float-left w-40 m-4 rounded-xl'}
            />
            <Image
              src={korean}
              alt={'computer science'}
              className={'float-none md:float-left w-40 m-4 rounded-xl'}
            />
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
