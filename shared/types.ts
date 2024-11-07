export const CategoryMap = {
  상의: ["반소매 티셔츠", "긴팔 티셔츠", "민소매", "카라티", "탱크탑", "크롭탑", "블라우스", "긴팔셔츠", "반팔셔츠", "맨투맨", "후드", "니트", "니트조끼", "스포츠상의", "바디수트"],
  원피스: ["캐주얼 원피스", "티셔츠 원피스", "셔츠 원피스", "후드 원피스", "니트 원피스", "자켓 원피스", "멜빵 원피스", "점프수트", "이브닝 원피스", "미니 원피스"],
  바지: ["청바지", "긴바지", "정장바지", "운동복", "레깅스", "반바지"],
  치마: ["미니스커트", "미디스커트", "롱스커트"],
  아우터: ["코트", "트렌치", "털코트", "무스탕", "블레이저", "자켓", "블루종", "야구잠바", "트러커", "라이더자켓", "가디건", "집업", "야상", "스포츠아우터", "후리스", "파카", "경량패딩", "패딩", "조끼"],
  신발: ["스니커즈", "슬립온", "운동화", "등산화", "부츠", "워커", "어그부츠", "로퍼", "보트", "플랫슈즈", "힐", "샌들", "샌들힐", "슬리퍼", "뮬힐"],
  가방: ["토트백", "숄더백", "크로스백", "웨이스트백", "에코백", "백팩", "보스턴백", "클러치백", "서류가방", "짐색", "캐리어"],
  모자: ["캡", "햇", "비니", "베레모", "페도라", "썬햇"],
} as const;

export type Category = {
  category: keyof typeof CategoryMap;
  subCategory: valueof<keyof typeof CategoryMap>;
};