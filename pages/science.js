import Image from 'next/image';
import code from '../public/sympy_code.png';
import graph from '../public/sympy_graph.png';
import Link from 'next/link';

export default function Science() {
  return (
    <div className={'w-full bg-gray-50 dark:bg-gray-900 flex flex-col'}>
      <div className={' text-center text-3xl font-bold p-24 dark:text-white'}>
        수학/과학 심화 연구
      </div>
      <div className={'flex'}>
        <div className={'m-4 bg-gray-100 w-full p-4 shadow-xl rounded-xl dark:bg-gray-800'}>
          <div className={'text-2xl font-semibold m-2 dark:text-white'}>인공지능과 편미분</div>
          <div>
            <Image
              src={code}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl dark:text-white'}>
              인공지능을 구성하는 코드에는 다양한 수학 공식을 활용한다. 특히 미적분은 인공지능에
              있어 매우 필수적인 학문이다. 인공지능에서 학습 데이터와 인공지능이 예측한 데이터의
              편차를 계산하고 이를 줄이기 위해 학습에 사용된 뉴런의 가중치를 조절한다. 가중치를
              조절하는 방법에는 크게 순전파와 역전파 방식이 있다. 순전파 방식은 인공지능의 학습
              방향으로 가중치를 조절한다. 따라서 인공지능이 학습한 결과와 실제 값 간의 차이를 그대로
              학습에 반영하기 힘들다. 그래서 등장한 방법이 역전파 알고리즘이다. 역전파 알고리즘은
              데이터와 인공지능 학습 데이터와의 차이를 뉴런의 가중치에 그대로 반영하기 위해 인공지능
              모델의 학습 방향과 반대로 편차를 없애는 방식이다. 역전파 알고리즘에는 뉴런에서 출력된
              값으로 입력된 값을 구하기 위해 편미분을 사용한다. 편미분은 다변수 함수에서의 미분을
              말한다. 다른 변수에 영향을 받지 않는 독립된 변수를 독립 변수라 하고 다른 변수에 영향을
              받는 변수를 종속변수라 하는데 함숫값 결정에 2개 이상의 독립변수가 필요한 함수를 다변수
              함수라고 한다. 이런 다변수 함수를 미분할 때 편미분과 전미분을 사용한다. 편미분은
              다변수 함수에서 미분하는 변수만 변수로 취급하고 나머지 변수는 상수로 취급해서 미분하는
              방식이다.
            </p>
            <Image
              src={graph}
              alt={'computer science'}
              className={'float-none md:float-left w-96 m-4 rounded-xl'}
            />
            <p className={'text-xl dark:text-white'}>
              편미분으로 미분한 함수를 편도함수로 하며 편도함수를 나타낼 때는 어떤 변수를 기준으로
              미분하였는지 나타내야 한다. 편미분을 직관적으로 이해할 수 있도록 Python을 사용하여
              편미분을 계산하고 해당 식을 그래프로 보여주는 프로그램을 제작하였다.
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
