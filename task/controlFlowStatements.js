// Q. 1
// 변수 x가 10보다 크고 20보다 작을 때 변수 x를 출력하는 조건식을 완성
const x = 15;
if (x > 10 && x < 20) {
  console.log(x);
}

// Q. 2
// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력
for (let i = 0; i < 10; i++) {
//  if ((i % 2) === 0)
  if (!(i % 2)) {
    console.log(i);
  }
}

// Q. 3
// for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력
let str = '';
for (let i = 0; i < 10; i++) {
  //  if ((j % 2) === 0)
  if (!(i % 2)) {
    str += i;
  }
}
console.log(str);

// 20 이하 짝수 출력
for (let i = 0; i <= 20; i++) {
  if ((i % 2) === 0) {
  // if (!(i % 2))
    console.log(i);
  }
}

// 20 이하 홀수 출력
for (let i = 0; i <= 20; i++) {
  if (i % 2) {
    console.log(i);
  }
}

// 20 이하 짝수 큰수부터 거꾸로 출력
for (let i = 20; i > 0; i--) {
  if ((i % 2) === 0) {
    console.log(i);
  }
}

// Q. 4
// for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 10; i > 0; i--) {
  if ((i % 2)) {
    console.log(i);
  }
}

// Q. 5
// while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
// -1 빼는 방법 말고 다른방법은...?
let even = 0;
while (even < 10) {
  even += 1;
  if (even % 2 === 1) {
    console.log(even - 1);
  }
}

// Q. 6
// while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let odd = 10;
while (odd > 0) {
  odd -= 1;
  if (odd % 2 === 1) {
    console.log(odd);
  }
}

// Q. 7
// for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum += i;
  console.log(sum);
}
console.log(sum);


// Q. 8
// 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let multiple = 0;

for (let i = 1; i < 20; i++) {
  if (!((i % 2 === 0) || (i % 3 === 0))) {
  // if( !((k % 2) && (k % 3)))
    multiple += i;
  }
}
console.log(multiple);

// Q. 9
// 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
// let multiple = 0;
for (let i = 1; i < 20; i++) {
  if (((i % 2 === 0) || (i % 3 === 0))) {
    //  if( !((k % 2) && (k % 3))) {
    multiple += i;
  }
}
console.log(multiple);

// Q. 10
// 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (let i = 0; i < 6; i++) {
  console.log(i);
  for (let j = 0; j < 6; j++) {
    if (i + j === 6) {
      console.log(j);
      console.log([i, j]);
    }
  }
}

// Q. 11
// 삼각형 출력하기 - pattern1
// 다음을 참고하여 *(별)로 높이가 5인(var line = 5) 삼각형을 문자열로 완성하라.
// 개행문자(‘\n’)를 사용하여 개행한다.
// 완성된 문자열의 마지막은 개행문자(‘\n’)로 끝나도 관계없다.
let star = '';
const line = 5;
let result = '';

for (let i = 0; i < line; i++) {
  // console.log(i);
  for (let j = i; j <= i; j++) {
    star += '*';
    // console.log(j+'\n');
    // console.log(star);
  }
  // result += star + '\n';
  result += `${star}\n`;
}

console.log(result);
