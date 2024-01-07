import { solvePart1, solvePart2 } from './solution';

const input = `.?..??#?##????#...? 4,1
...????..??????.# 2,2,3,1
???????#???.?## 1,1,1,1,3
?.#???#????#???#. 2,1,4,1
???????##????????. 1,2,7,1,2
?.???????.????. 5,1,1
??.??#?#?. 1,4
??.???????????.? 4,2
??#.?????#??? 1,1,1,5
??#..#??#? 2,4
??.##?#.##???#??? 4,2,2,1
???.?##?#.?.? 1,5,1,1
?#???#????.#??.#?#. 1,6,3,1,1
.#?#???.#???#?#?? 1,1,1,7
.?#?####?????###? 1,4,6
????.#??..????#??. 3,3
??#????#???.? 3,3
?.?.??#????????????. 4,4
.?????????????. 1,2,1,1,1
?.###?.???.. 4,1
?.#??.??#???????? 1,1,1,10
?##???#?#? 2,5
??#??##??.???##?? 8,4
?.???????????? 5,1,2
?..???##??#???? 1,1,6,1
??#?.??.#. 4,1,1
???????.#?#??? 1,1,1,6
.??????#????#.?..?. 1,1,6,1,1
#????#??#?????.???? 3,2,3,2,2,1
?#??#????????#???#?. 1,4,4,2
.??.?????? 1,3,1
.??#.?????.?# 3,1,1,1
???..????.? 3,3,1
?#?#?????.#?? 1,5,2
???????.???# 1,1,2,1
???#????????#?#??? 2,1,8
?#?#???#.????#.? 7,1
.#?.??????? 2,1,2
???.????.???#?. 2,1,4
?#.#?#.#?????? 1,3,1,4
??????????..#?????? 2,2,1,1,1,3
???#?#?#??.?#?? 8,4
###???????? 3,3,2
??.??##?#??..#.?? 1,4,2,1,2
?#?#????#?.?? 2,3,2,1
??????.?#??###?? 1,1,1,7,1
??????.???#???### 3,8
???##.?#?????#???? 4,1,3
??#?#..??.??. 1,3,1,2
.#..?????????###?# 1,1,10
??.#?#????? 3,1
.#????#?##? 1,3,2
.?#?????#???????. 9,5
?????.???.?# 2,1,1,1
??#?.??.?##?# 1,1,5
?##????.?.#?#?? 3,2,1,1,2
?????#???#?????.?? 1,1,1,1,2,2
???#?#????# 4,3
??#???#????.?. 8,1
.#?.??##??. 2,5
??#??.?#?#??? 1,4,1
?????..#???? 1,1,2,1
??????#??.??? 2,5,1
??????#.??#??.?#?? 1,5,4,1
??#???#???##?????##? 14,3
??????.###? 1,3
??????????? 1,1,3
??##??????.???? 3,2,1,2
???????????.??? 10,1,1
????.#????????#??. 2,2,6
#.?.??#?.??#?#??#?# 1,4,8
#?#???#??.????????? 1,7,1,1,1,1
??????..??. 4,1
.?#?#??.#??????? 2,2,4,1
?.?##?.?##.? 3,2,1
??#????#?###?#??? 2,1,7,1
.?#.????????? 2,5
??#?#?#??? 5,3
?#??????#??#? 2,1,6
.??????????# 2,5,1
?#???.##.?? 1,2,1
??#?.???.#???.?.? 4,3,1
??#??#?#?.?#?#?? 7,5
???#?#??#?## 1,2,1,4
#.???.#???????# 1,1,3,1,1
.???????#. 2,1,2
???#???#.???# 3,1,1,1
?#????.???##??????? 2,8
?...#?#?????#??#??? 1,3,1,6
.????#?#?.?# 1,5,1
???????.?????????? 1,3,1,1,1,2
??.#.?.?.. 1,1,1
?.??????.??.#?#???# 1,2,1,1,5
??#????#?###?#?.# 1,1,1,8,1
??.?#????###?#??? 1,5,5,1
#??????###????? 1,8,1,1
#?#??#????..??#? 1,1,6,1,2
???????.????#?? 1,2,2,2
#..?????#?????##???? 1,1,1,11,1
??.?.????. 1,1,1
???.??.??? 2,2,1
???????#..??? 6,1,1
##??#????????????. 5,4,1,2,1
???.?????.?###??? 2,1,6
???.?##??????#??# 3,4,1,3,1
#????.???????? 1,1,2,2
???.#?##...? 2,4,1
?.???.????? 1,1,1
?????#???.??. 1,1,4,1
?????#.??#?#? 6,1,2
??????#??.###? 6,1,3
????????????????.# 1,3,1,1,1,1
????##??..???#.#???# 1,2,1,3,5
??#??????##?#?? 1,1,1,5
????#????#? 5,1
????.??#??. 2,3
?????.?????????? 4,2,2,3
.?#???????? 1,2,1
?#?.?#??.?? 3,1
???????....??#.??? 1,3,1,3,1
?.?????#??#? 1,2,1,2
???#??.??#.?. 4,2,1
..?..??#??? 1,4
???##???????. 4,3
?##?#?.?????# 6,1,2
##?.??.#?. 3,1
.??#?#????? 4,1
?????...?. 2,2
.????#?.?????? 1,1,1,2
??..#?????#??#? 2,1,1,7
?.#???##??????#? 7,5
..#?.???#?. 2,3
????????????? 1,10
?##?#??.#????#.?#? 3,1,2,1,2
?#??#??#?#?.. 1,7
????#???#.?????#???? 6,7
##??#.?##???? 2,1,2,1
?#?.?#.?.?????. 3,2,4
...??#?#?? 2,2
?.???????.??###?#?.? 1,4,2,7,1
?#???.?#??? 2,1,5
.??.?.?###? 1,4
.??#?#??#???#??.?#?. 5,7,2
??####?.##???????## 1,5,2,1,1,2
.?..#.???#??...??? 1,1,1,1,1,3
??##????.##?#?#?. 4,7
...?#???##? 2,2
??.?##???#?#??..?? 1,2,6,1
????#?#?????##??#? 4,1,3,6
??????#?.?? 1,2
#??.?#.##???#?? 3,1,3,3
?##???????????. 2,1,1,1,1
.????????##?????? 3,1,5,1
.??##??#??????#?? 1,13
?#.????.???.?????# 1,3,1,2,3
#.???????? 1,5
??##?????#??#??. 1,6,1,1,1
??.?????#? 1,1
???#???????#?.???#? 1,7,1,1,1
?##?????.?? 2,2
???????.???. 1,1,1,1
..#?????#?? 2,2
#?#????.?#?.???#?. 3,1,1,1,2,1
..?##????..#??##.. 5,5
??.##????#???. 1,7,1
???#.#??????? 1,1,4,2
??????##??.??###.. 4,5
???.?#..##.????#?? 3,1,2,3
?????#??.??? 1,1,2,2
?#..#??#???#????### 1,5,2,1,3
?.#????????? 5,1,1
?#??????????#?????? 2,6,1,2
?.??????.####?#?.? 5,7
.?#????????? 6,2
??###?????#.?.??.??# 1,6,1,1,2,3
???##.??#??? 1,2,4
#????#??.?????? 8,1,1
?.?#????#??.#..#.?# 1,3,3,1,1,1
?#??.#.??? 1,1,1
????????????#??#?. 1,11
?#????.????? 3,1,1,2
???.??#.??????? 2,1,6
.?#???#?.??.?#.?#? 3,1,1,1,2
??#??#?.#???. 2,2,1,1
###???.??#??#..??.? 6,4,1
?????##????? 4,2,1,1
??????#?????.?. 1,7
????.???##???.??? 2,4,3
?.?##.?????? 3,4
####???##.?#?..?##. 5,2,2,2
????#?##????.#??# 1,7,1,1,1
????#?????.#??.??? 1,5,2,2,1
?#.#???#??..# 1,5,1,1
??????##?.?? 1,3
????#???#??.#.##. 1,2,2,1,2
??????#?????? 4,3
??#??#?.????? 2,2,2,1
.??#??###.#???## 3,3,1,3
..??.#???# 1,5
.?#??#????#?. 7,2
???##??#?????. 3,1,1,1
#.??##?#??#??#..???? 1,9,1,1,1
?##?##?.????..? 7,1,1
#??.?#????.??#?? 1,1,3,1,2
?.##?#.?????.##?? 4,4,3
??...#???#???###?#? 1,13
..???#????????##?.? 6,4,1
.??..#???. 2,1,1
?????.???.##?? 3,3,4
????#????##???.?.?? 12,1
?????#?#??? 1,3,4
??#???..??? 6,3
?#.??#?????.?#?? 1,4,4
???.??.??.#???## 1,1,1,1,6
????#??#?#??#????#?? 1,1,1,2,2,3
?.?##.?.?# 3,2
?..?.?##?#?#? 1,7
?.?#??#???#???.???? 1,5,1,3,1,1
?#?????????#?##??? 1,1,1,9,1
#.??#?????? 1,3,2
#?.?.?##??.? 2,1,3,1
????????#??#?#???.. 2,6
???????????#??#???.? 8,1,1,1
#.???????.#?. 1,4,1
????#?#???.#.? 3,4,1
?.?#??.??.???? 3,1,2
?#????????.????##? 8,1,3
??????.?????? 5,2,1
????????..???.?#? 7,2,1
?#????#.?#??#?.??? 2,2,5,1
#?..????????#? 2,8
????..???????#? 1,2,1,1,2
?#?#?????##.#.?? 4,5,1,1
??????????#?? 2,7
??#.?.?.??????##?? 2,1,4,3
??##?????#? 3,3
?#????#??...#???? 6,3
???????#?.?#??? 2,1,2,3
#??##??#?#?.???#. 10,3
?#?#.?#???##.?? 4,4,2
?.#?##????#???? 6,5
#??#??#???#?#? 1,3,1,5
???#.?###?#????#.??? 1,2,7,1,1,1
?????.???.?. 3,1,1
??.???????? 1,8
??..?.?#.#?##??? 2,1,1,4,1
.???#????#?.#?? 6,1,1
?????.??#????????? 1,2,11
.?.?###???#?.? 5,1,1
.#?##..??# 4,1,1
#????#?.?? 1,5,1
#???###?.????.? 1,5,3,1
#?.?#.#?????? 1,1,1,3
#?#??.??#..#..? 4,1,1,1
??.?##?????? 1,3,2
??????.??#?.??.????? 4,4,1,2
??.#???#??????????. 1,11,3
???###?#?? 5,1
???..????#??#???# 3,7,3
?#???#???#?????#??. 3,1,3,3,1
?????????#?.#? 1,4,1,1
.??#????#?#?.? 5,4
#.?.????#???#?????#? 1,1,2,3,8
???.??????.?#?? 1,1,1,1,4
???#?????.? 7,1
???.???????????#?#? 1,1,9,1
??????##????? 1,1,4
???.??#?????????. 2,7,1
.??#??##?.? 2,3
?.#???.??.?? 1,1
???#.???.?.. 1,1,1,1
?##??.?#?? 4,1
???#?.??????#?? 5,8
.?????????? 2,7
?#?.?#??#??#?? 2,8
?##?#????#?.??#? 7,1,1,1
##.?##???# 2,4,1
???#?##????##????.? 6,7
???????#???.?.. 1,6,1
??.?????.#??#????? 1,1,1,1,6
?????????#?.#.?#??.? 1,2,3,1,4
????#??????# 6,2,1
?????#?????????#?## 1,2,1,2,1,6
.???????#??#?#.#?? 3,2,1,1,3
?.????.?#? 1,2,1
?????.#..????#? 1,1,1,1,4
?.??##?.?.??????? 3,4
?##?##?###???? 6,5
??.??#?.??.??#??.?? 2,4
.????#.??#???#??? 2,2,9
?#?????..????.??? 6,4,1
??????#.??.?? 2,1,1
??#??????#?#?? 4,1,4
#???.#.?#???? 3,1,2,1
?.???#??.???#. 1,3,1,3
?.????.?#??? 1,3
?#.#??#?????##? 1,1,9
??#??#???#? 3,3,2
?#????#?????? 1,3
????#?????? 4,1,1
??#??????###?????#.. 2,12
###?#.?????????? 5,1,2,2
.##??#????.? 7,1
?.?.?#???????.?? 1,1,1,2,1
????#???.?#???#??.?? 6,1,3,1
.????..???#??#?????? 4,11
??#???..#??#????. 6,8
?..?#?#???????. 4,4
???#??????.????.. 4,1,1,2
.?.???#????? 1,3,1
?##?#????#???#????? 5,7,2
.#??.??#???? 1,1,3,2
???#.??.????.?#. 2,1,1,1,2
.????#?.??##? 3,2,5
?#.?????.? 1,2,1
????#?#?..##? 1,1,1,2
.????#????????#??? 2,1,8,1
?#?.?????..??????#?# 2,1,3,1,1,3
???.?.???? 1,1
?.??#?##???#??#? 1,2,7,1
???.??.#.. 1,2,1
??????#.?. 1,3,1
?#?????#???? 3,1,3,1
????.##????#????? 3,3,8
#????????.#??#?? 1,6,1,3
??#?????#????#???? 3,2,1,5,2
.??.??.#??.#? 2,1,2,1
.???.#?#?#? 1,3,1
??#?##?.??.??.?.??? 6,1,1,2
??##????????.???#? 10,3
#???????????##? 2,6,4
?#??.?###?##?. 3,6
.??#????#???.? 1,4,1,1
?.#.??#???? 1,5
?????#????##??? 2,7
????###?.???..????? 7,1,5
???.????#. 1,2,1
?????.??.???#??. 4,1,1,1,1
?.##?#???#???#.??#? 1,9,1,1,2
?.??????##??..#??.? 6,2
???????????? 1,1,2,1
???????#??????#?? 6,1,2,1
??????.???? 1,1
????#???.?# 2,2
???????.??.??.?. 2,1,1,2,1
?#????#????????? 1,1,7,1
?#.?????#??##?? 2,6
????#.?..?????#? 5,5
#?#?#?????#?? 8,2
#?#?????##??.??.? 6,4,2,1
??###???#?##??????.? 6,6,1,1
??????#????#? 1,9
..????#..#. 1,1,1
.??#??#.?.?# 3,1,2
?#???.#??.#.?????##? 1,1,1,1,1,8
?##????????? 7,1
#?##??#.??..???#.# 1,5,1,1,1,1
?#####?#?#???? 5,1,1,3
#.#?#?##..?? 1,6,1
#????#??.????# 6,1,1
?#.?????.#?####??.?? 1,3,6,1,1
.??##????# 2,3
??#??#?????? 3,1,5
?#?.??#???#? 2,7
.????.??##.??? 3,2,2
?.???????#?????#?? 5,8
?.#.?#???#??.? 1,2,3
?.??#?#.?.??.????? 4,2
.???#???????.??. 4,1
#????.#.###????????? 2,1,3,6
??#???##???.#??#..? 3,4,1,1,1
??.#??##????#?? 1,8,1,1
??????##??#???#??? 1,4,1,1,2
.???????.?? 1,1,1
?#??..?#???#??##? 1,1,2,5
?##?..?#?#..??? 2,4,3
?.??.??.?..????? 2,3
.???.??####.??#??? 1,1,5,1,1,1
???.??????.??#??? 3,2,6
.???##??##???? 9,1
.??.?#??#????#?.?#? 1,1,6,1
???????.?.#?#. 2,3
?#?#???????????? 12,1
??#?#??#.?#...? 7,1,1
?????..#???#??????? 2,1,4,2
??#??????#??#?#????? 2,1,7,1,1
??#???..?#?###.?? 4,6,1
#..#??#?#??? 1,1,4,2
?.??#?#.????##??.? 5,7,1
?????.?.??#?.?##??#? 1,1,1,1,4,2
.?.?#?##?????? 1,1,3,2
??????????????? 1,1,1,2,1
??#????.?????? 4,4
??##?#.??.????????.? 6,1,2,1,1,1
?.#..??#..##? 1,3,2
?????..?.. 1,1,1
??????#.?#?.?#?#??# 5,3,4,1
????#??#???#??.#? 1,8,2,1
????????#??????#?? 8,5
???.#??.????#???. 1,3,1,1,4
...?#????#?##? 3,5
.#??#?.?#??# 1,3,5
?????#?##?#? 2,6
##??????????????.??? 7,3,3,2
???#???#??.? 1,7,1
#?#??#?..???###??? 1,1,2,9
?.????###?????#?## 1,6,4
???.??.?#??#.??##?# 1,1,4,3,1
????????#???.#. 1,1,7,1
??????????# 4,4
????#??.??.??.?? 5,2
#????#??..???. 1,3,1,2
?#?????#??#.?.?? 2,1,1,1,2
.?#?#???.??????????? 6,9
??#???.?????? 4,2
.??#??#..???#???? 3,2,6,1
??#??#.#???? 5,1,1
.????.?#???? 1,1,2,1
???.?..##??.? 1,1,3,1
????????.?.# 1,3,1,1
?#???#????.?#?##???. 7,6
.???????????? 1,4,3
?.??.?????????#? 1,5,3
???.#.#?##???.?? 1,1,5,1,2
..###???.??.#..? 3,1,1,1
????????#?#???????? 1,1,9,2
???????.?..#? 4,1,1
?#??#???????# 2,2,2,2
???#????##?. 3,5
.???###??#??#?? 5,2,4
.#?.????#.??.??? 2,1,1,2,2
.###.##.??.??.?? 3,2,1,1,1
?????????????..?#??? 3,3,1,1,4
?.?.?##?##?#???##? 1,13
??##?#??.?.?##?????# 6,1,4,3
.??.???????#?##???# 1,11,1,1
???.?#???.????#????? 1,4
?????.??#?????##???? 4,12
???#?.???#?#???#??? 3,5,3
#??????##??.?? 2,5,1
??#?.????##?#?? 1,1,7
??#?##?.?#?#?? 5,4
.????????#?.???#? 5,4
#?????#????? 1,5,1,1
.?#???????#?#? 1,1,3,2
#??????????????.???? 3,3,3,1,3
?.#??#???##? 1,3,3
.????#??#?#??#. 1,2,4,1
??#?.??#???#?????.?? 4,1,8,1,1
??..??.??.? 1,2,2
?#??#??.?#? 6,3
#?#?#???.??.??.#??? 3,4,2,1,2,1
#???#???#??#??#.#? 5,8,1
.?.??#.?????? 1,3,2,1
???##?????.???#????? 7,7
#.??..???#??## 1,2,1,5
??#??#??????? 3,2,5
?.#??#??.?.??? 6,1
????.????..??#?.. 2,3
???#?????#?#??.??.?? 1,11,1,2
??##??.?.#?#?#.?.?? 3,1,5,1,1
.???#?????????..? 2,7
#?.?#??#??????.??# 2,8,1,1,1
?.???#???#??????#?# 1,5,1,6
?#???????? 1,1,2
??###??.?#. 5,1
?????.???##?##????#? 1,13
??.??#?..#.?# 1,4,1,2
??#?#..#..?..? 5,1,1,1
??????##.#.?? 7,1,1
?#?#.?#???.#??#???? 3,3,8
?#..???#??#???????.? 1,1,4,3,2
??##..?.?#.? 4,1,1,1
????.???..??#?#? 1,1,1,5
??.?#????????## 1,2,1,6
????.??#???##?#??? 1,12
?##??#??????#?#?? 2,1,6
.??##?????????#???## 11,1,1,2
???????.????##????? 2,3,3,3,2
??????????. 5,1
?##..?#?#?????. 2,3,3
???.####?????. 1,7,1
.?.#???.??????.? 1,5
.??#??.??? 3,2
?.???.?#?.?? 1,1,1,1
#?#????.????.??? 7,3,1
?#?.#???#?#?.?.??? 2,2,4,3
?.#??.?##? 1,1,4
?..###??#??..?#?#? 7,4
#???..????????????. 1,1,1,3,2,1
??#???..#???#????? 1,4,3,1,1,2
#?#???##???? 3,3,1
??..??.?#???#??? 2,1,3
?#?.?.?.???#.??# 3,1,1,3,2
..??..???? 2,2
????????##.? 2,4
????.??...#????? 1,2,5
?????.?????????? 1,8
#????#?.???###????.? 3,2,6,1
?????#??????#??? 6,3
???.??????##??#??#? 2,1,1,9
????#??.#??????.??# 1,5,4,1,1,1
??..??.????# 1,5
??#???.#???.?#.# 5,1,1,2,1
?.?.#???#???.? 1,1,2,5
.???##?????..?.?. 5,3,1
??#????##?????# 2,2,2,3,1
???###??..#??? 8,2
??.?..?#????# 1,1,3,1
.#??#???...?#??#?. 1,2,2,4
.?#?.???.?. 3,1,1
?#??##????#.??#.? 6,1,1,1
?.??.?.??#??.?#.#??? 1,5,2,4
.??#???##? 5,2
??????#?????##? 3,9
??..????#?.??? 2,5,1
??.???..??#??.?? 1,1,1,4,1
???###??.#????? 5,3
?..#.????. 1,1,1
??#????#?.#?#?????.? 4,1,1,7
.?#????.?#????#?? 3,7
?.##?????#??###????? 3,8,2
.????.?????#???.?.? 3,7,1
.???#?#???????. 6,5
.?#..???.#.????. 1,1,2
..??????.???.?.? 3,1
???..????????????.? 3,1,3,1,2
??????#??##??#????.? 8,3,2
.#?#?????#???#. 1,5,1,3
?#?#????????. 6,3
?.#???#..#?#.????? 5,3
???????????.?.?#.. 7,1
??????#.???...? 5,2
???#???#?#???.#?#. 1,1,6,1,1
????.#????##????? 1,1,7,1
?.#?..?#?? 2,3
.??#?#.#.#???? 3,1,1,4
#.#.?????????.??. 1,1,6,1
?????.?.?????#? 1,5
?##???#??##?#??#?#?? 4,5,2,4
?????#????# 2,2,3
??????.#?.? 3,1
.??????#?..????????? 1,5,1,1,3
?.??????#??? 1,2,3
?.#????.?##??#?#?? 1,1,2,6,1,1
?.??#?#?????#?.? 1,9
??????????.?. 2,3,2
#....?.???#?#???#? 1,11
.????.?#???????.. 4,1,1,2
??##???#?????##? 7,5
????#?????##???##.. 1,3,8
???.?#.??#??# 2,5
?#?.???#?#?? 1,6
??.?.#????. 1,5
????#????#? 3,3
..?#???..#.?. 5,1
.???##?###???#????? 5,8,2
??#?.#???.#???? 3,1,1,2,1
?????#??#???????? 5,1,3,1
???.???.?#????#???# 1,1,4,4,1
.##?#?????#?.# 7,2,1
?####??.?.?.??##??? 5,1,5
.#???????? 1,4
.??????????? 2,1,1
?#????#??##?? 4,1,2
?#??.?.#.#?#?#?#?#?. 2,1,1,1,10
???#???????.??# 6,2,1,1
??######.????.# 8,1,1
.??#??#?#???##?.?? 6,1,4,2
##.?????..? 2,2,1
????#.?.?#???? 4,2
?#??????##. 1,4
.??.?.#????.?? 1,1,2,2
???????##. 1,1,2
???#?#.??.?# 3,1,1
?#??##???#? 7,1
???#?#???.??????.? 6,1,1,1,1
??????#.??.. 6,1
????#?#..??##?. 5,1,2
?????.????????.? 1,1,1,1,5
#??#??????.##?? 2,1,1,1,4
.#####.#????# 5,6
##?##???.?#?????#? 7,4,3
??????#???#??.??? 8,3,2
.??#??.???????? 1,1,3,2
??..??#???#????. 2,4,3,1
.???.?##??????#?? 2,11
.??.???#?.?#.? 2,2,2
?.??.??.?. 1,1
#?.?#?.?#???#?? 2,3,3,2
??..#???#? 1,2,3
#?#?#???????? 1,1,5,1
?#?.??##.?##.. 2,3,2
?...#??????.? 1,1,5
????.??#?#?????.?? 4,1,4,1,1,1
????#??????.?#?#??? 3,3,1,4,2
?.?#??##.?? 6,1
#?.?????#?#..?#??#?? 1,8,2,3
????##.?#?##??#?.? 4,8
#????#?.#.????#.? 1,5,1,4,1
???##????#???? 1,3,3
#?..##????????? 2,6,2
.#.????????..?#? 1,2,1,1,2
.??#???#??#.# 1,1,5,1
#???#??#???#?.? 9,1
???.?...?????????? 3,1,9
?.?#?#.???? 1,4,1
???????##?. 1,3
????.##???#.? 1,2,3,1
#.?#?#????.?.?# 1,3,3,1
.????...?#?.? 2,2
???????#??. 2,2
????.???##?? 2,5
.??...##????..? 1,5
.????.?..?. 3,1,1
##?????#####?##.? 4,9,1
?#?.??????#?? 2,1,1,1
?#..?????????#?. 1,5,2
#?#?.???.???#?? 1,1,1,1,2
?.????#?##??#????? 1,10
.??#?#.??.??????? 3,3,3
??????##???????.???? 2,10,1,1
?.?##?###??#.?.?? 1,10,1,1
?????.#??#?#????. 5,1,4,1
.????#.??.??????# 3,2,4
?#???##?????#. 8,1,1
?????#..?? 1,1,2
.?##???.#.. 3,1,1
.?#...???? 1,3
??????.#??##??# 1,2,6,1
?.?#????.?#.#?# 1,1,3,1,3
#?????##????.?? 1,1,2,2,1
#????#??..#????.???# 2,3,1,3,1,3
?????#???## 2,1,3
?.???.???##?#? 1,6
#?#?.?#??? 4,2,1
??.??#??.#? 3,2
?##?.???#???#.#????? 3,1,6,1,1,2
#??#???#?????# 1,6,1,2
???#.????.??. 1,1,1,1
?.##?#???.? 2,4,1
????#??.??.??. 4,1
????###??#?#?????#?? 11,7
.???#??#??????# 4,1,1,1
#???##???. 2,3,2
??##.?#?#???????#?# 2,14
?.?#?????????? 4,3,2
???.#????? 1,4
#?.??.?????##?? 1,2,4,2,1
.??#??#.?#.???##??? 1,2,1,1,5
#.?????##?###.. 1,1,9
???.??????##??.???#. 3,1,6,4
.????##?.????? 7,1,1
??????.???#?#? 2,6
????????.?#?.? 5,1
.?#??.?????.??#?##? 2,4,6
.#?.?????????#??#?. 1,9,1
???#?##?#????##?..?# 2,4,1,1,4,1
#.#??##?.?????#?#?#? 1,1,3,1,1,7
??.??.??#. 1,1,3
??.#?.?#????#. 1,2,7
?????????????#??? 2,1,1,8
?#???????#?#?? 7,1,2
?#??.???#????##???#? 4,1,8,2
??#??...#??? 1,1,4
?.???????#?????#? 1,3,4,1,2
?#??#?#??.? 2,1,3
??##?##??.?.#? 7,1,1
??????.??#??? 2,2
##?.?#.?#?#? 2,2,1,2
?.????##?#???? 1,2,5,1
??#?#??#?. 5,2
??????#??#?##?????? 1,1,2,11
??????#?#????????#?? 12,2,1,1
?#..?.????##?.? 2,1,4,1
.?#???????.##???..#? 3,4,3,2
#####?.?.??#? 6,1,3
??#??????????? 2,1,2,1
???#?.??#??? 1,4
???..??????#. 1,3,2
?.??##??#?#?.# 1,1,7,1
??##?#??.?.?. 8,1
????????.##??#.?? 1,5
?????#??????. 1,3,2,1
??????????#??????#? 4,3,1,1,1,2
.???#?????#???? 3,7
??#??.?##. 1,3
????#?????#??? 10,1
.?????##?.???##? 1,1,3,1,2
?????????#? 1,1,5
.?#?????.#??????? 7,6
#??.?#.#?.?###???. 1,1,1,1,5,1
#??#.?#??##???.??#?. 1,1,5,1,1,2
?#??#.?###???..???? 2,1,6,2
?#?????.#?.#????. 6,1,1,1
#??#??????.?????? 9,2
??????#????#??.? 7,3
.????#????. 1,4
#??#?.??#?#? 5,4
???#?#.???????? 1,3,1,1,1
??#??#??#??##?? 1,10
##?##.?.#?.?? 5,2
.????.?#??????.. 1,5,1
????#??#?? 4,1
?????.?..#????#????. 1,1,1,1,8
?????.??##??? 3,6
????????#????#??. 11,2
??#?..?###??..? 1,3,1
.?#??.?#?#???.#. 3,6,1
??#.#?.?????#? 1,1,4,1
?###?????## 6,3
.??.?.???#????#?? 2,1,2,4
??#?#?#???#?.??#? 10,4
?????#?????? 1,1,1,1
.#?.?????? 2,1,1
??.???????#??#.#? 1,1,2,5,1
.??????..?.#????.? 1,1,2,1,3,1
##?..?.##???? 2,1,4
#.?.??????#?##. 1,1,1,5,2
?.????.???# 1,2,1
#???#.#.#..##.#????? 3,1,1,1,2,6
??######.????? 6,3
.???##..?###????? 3,8
..?##????##? 5,2
????.????#??? 2,1,4
????#?????. 1,2
.???.?????.#### 1,4,4
.????.??#.???#? 3,2,5
.???.???#? 2,3
?##???????.???# 8,2
???#???###. 6,3
.???????.? 1,1,1
.#?.##?????????? 1,7,2
#..????#?#?#??##? 1,1,8,2
??#??#?????# 8,1
?#???.?????. 4,5
????????##?.? 1,3,4
#????????#?.... 1,4
?##?..????#????# 3,10
??##????#.?.?#.?? 4,4,2
?.?.?.??##?? 1,1,1,5
.#?###?#??#??#??? 10,3
???##?.?#??##??. 5,7
.##??.???#???. 3,3
.???#??#?.??? 6,1
.????????? 3,5
.#?#????#?#. 4,1,1,1
???.?#????###??#.? 1,1,3,4,1
#????#?.#.??..?? 1,5,1,1,1
#??.#?.??????.. 1,1,2,6
??#?????####?????.?? 1,1,8,1,1,1
.??##?..?. 4,1
#???????#?? 1,8
?#???#???#???..?.#? 13,1,1
?##?.?.#?#? 3,1,3
.??????#?.?? 4,1,1
??.????###???#?. 1,8
#????????????#?.?# 2,2,7,1
???##??#?#???????# 1,2,2,1,5,1
.?#?????.? 1,3
.?###?##?##.?????? 7,2,2
.#??#.?#.? 1,2,1
.????#.??? 5,1
.????####?#?.#?.#.? 1,1,7,2,1,1
.?..??.?????? 1,1,4
?#?.??..?.? 2,1,1
####?..??????????## 5,2,1,2
#?#.#??????? 1,1,1,4
???#????###.???????? 1,4,3,1,1,2
?#?????.?#????.? 5,3
????#??????#..#?? 1,2,2,2
.?#????##????.??.#? 8,1,1,1
?#??.????#?#.? 2,1,7
?#?????.???#? 1,1,4
?????##?????#?. 5,4
.??????#?. 2,1,1
#???##???#??.#? 2,4,1,2
?##?##???.? 6,1,1
?.???#????#??#. 1,5
?#??#????????? 1,3,1,1
????#??.## 1,1,2
.?#??.????#? 1,5
??#?.#??????.???? 2,6,2
.??????#???# 1,3,1,2
????.?#?##.?????#?? 1,1,4,1,3
??#?#????.??#?#???? 1,1,1,9
???.??#???????# 2,3,1,1
??????.????.?# 3,1,2,1
..????????? 1,6
?#????#????.. 2,1,2,2
?####???..#?#? 7,3
??#.?.??#?.? 1,2
#??????#?##. 1,9
???##?????????#.??? 12,1,2
??##??????.?????.?? 3,3,1,1
???.#??###??##. 1,7,2
??.#?#????.??#. 1,4,1,2
???????##???##??? 1,10
??.??#??#?????? 6,4
????#???.##??.???# 4,2,4,2
.???.??.????##??.##? 1,1,4,3
##..#?????#?????? 2,9,1
#????#????.?.???? 1,8,1,1,1
.?##???????????? 5,2,3,1
.#???????##??#?. 1,8,1
.??..?.????#?? 1,1,1,4
.?????#.???#?..?.??. 5,3,1
..?#?##??#???#??? 9,5
??#?##???##??#?..# 2,10,1
?.#????.??##?? 2,5
#????.???????? 2,1,1,1
?#?.?.?.??????? 3,1,1,1,2
.#.???????#??? 1,8,1
.?#?#???#???? 2,1,6
????#????.#?? 2,1,1,1
.#?#??#.#???#?##? 4,1,1,7
????#??.#?.??#? 6,2,2
.?#????#????. 3,2,1
.???.#???.? 2,1,1
?##?#?#???#?. 2,3,3
##???#??#?#. 2,4,3
#????.??#?#???. 3,4
????##??#..?#. 5,2,1
????????.?#?????#? 5,2,3
.#?.?.??#? 1,1
.?.?...?##?#.? 1,1,3,1
#?.???????? 1,2,2
..??????#????.? 1,2
????.??###.? 1,3
###?#?..?# 5,2
?.#???????#??. 2,3,3
?.????.#?????.??.# 1,2,1,2,1,1
?#..##????? 1,6
.??#?????.?????? 1,1,2,1,2
??.?#???#???##?? 2,2,6,1
?#?.#?#?##??# 2,9
?.????.?#?. 1,1,3
?#?#?????..? 5,1
##??????#??? 3,2,2,1
??##?#??#???##??.? 14,1
?#????#?.???. 3,1,2
???????????? 3,1,2,1
.????.??.????#?#?? 1,1,1,7
?.#.???????? 1,1,4
?????????????? 4,3,1
????#????.#???. 1,7,4
?#?#??##???##???.?? 8,6,2
??###?#.??#?.????... 1,5,3,1,1
?..?#?#????.?? 7,1
???#?..??#.?????#? 1,1,2,1,1,2
??#???#.??# 7,1
.?.?????#??##????#? 1,1,8,1
#???.?.?????????#?? 3,12
#??##.??.?#?###???# 2,2,6,1,1
????????.??????..?. 1,2,3,1
#???#?#?##??.##??#?? 2,7,5
????.?????#???????? 1,2,1,3,7
#???.????#???#? 4,8
????###?#?##?? 2,9
????#??.???.? 5,1
????.??#?#??????#? 1,11
?#?#?#???##???## 1,5,3,2
??#?#??#?#...?? 7,1
?..??.???##?? 1,1,1,4
#.?????#?. 1,2,1
?.?#??.?#?#?? 3,3
??.??.?#??.? 1,2,1,1
????.?..??#???. 1,1,4,1
??#????#???????? 4,5,3
?????#??.?#?.???# 7,3,1,1
?.???????????##?# 2,1,1,6
?#?.##.??? 1,2,2
??.#???#?##??...??? 1,8,1,1
.????????.??? 7,1
?????.?????##?#??#? 3,2,9
###???#??##??? 5,6
?#????#?????????? 2,1,8,1
#??.#??????? 2,3,3
.?#?#?????.? 3,1,1
?###???.??????..? 6,1,1,1,1
??#??????##?.???? 11,1
?.?#?##??.???#???#. 1,7,1,2,1,1
??.????.#??????#??. 2,2,1,2,1,1
#.?#????##?????#?#? 1,1,6,1,1,1
..#???#??#? 1,6
?.#?..#.?????.. 1,2,1,2,1
??.???#??#?? 1,1,1,1
?????#?????#???.?##? 5,1,3
.?#.?????# 2,2,3
.???#?#?..?????.? 6,5
#.##??##??.?#?????# 1,2,5,1,1,3
??#??.????#?#?#????# 2,11,1
..??????#?.? 1,1,2
??.###???????.?.. 7,1
?????.?.??#??.?.?# 1,2,5,1,1
.???#??????##? 1,4,1,3
.#.????????####.? 1,4,6
?#????#?##??##?.?# 1,7,2,2
??.?#?????????##? 2,1,1,2,3
???????..?????? 4,1,3
?.??.#?????????.? 4,2
.?..?#?##??..#.????? 1,7,1,2,1
?#?..???#?##????? 2,7
???.???#????#?.??? 3,1,7,1,1
?#????????.#???? 6,1,2,1
????#????#?#??#?#??. 5,10
..??#??##??? 1,1,2,1
??.#???????. 2,2,3
????.??###.??? 1,1,5
#??#?#???#?????? 1,1,1,3,1
?....##???.???#???#. 1,3,1,8
?.?..??????#????#.?? 2,8
.???#????##?????? 2,4,7
#??#.##?#??? 1,2,6
??.???????????#???.# 1,1,5,5,1
.?????????.?#? 1,3,2,1
???.?#????#???#???? 1,2,8,1
?#..#????. 1,2,1
??#?.?#???#????.? 4,1,2,1,1
#..????#????#?????? 1,2,1,3,1,1
??#?.??#????????##?? 3,6,6
?.?#?????? 1,1
?????????#????#?#? 3,1,1,1,1,1
??..#??????..#.? 4,1
???.?.#????##??? 1,1,8,1
?#????##?.???# 7,1
.???###?###????.?? 10,1
?##?#?##?#?.????#? 4,5,1,1,1
?#?##?..??###?#.??? 6,7,1
#???#?###??????.???# 9,1,1,1,1
?.??..???? 1,1
.#???#???? 1,6
???#.???#??# 1,1,1,4
?.?#???.??##???#??. 1,3,1,7,1
..?##?.?.???... 3,2
????.??????#.??.? 4,1,1,1,1
?..#?#.##. 1,3,2
.???##.??.####?#? 1,2,1,4,1
?..###?#???#?????? 1,5,2,1,1
?.?###??????##?.? 4,3,4
.???#???.?# 4,1
?##??..???## 3,4
???..#?#?.???? 1,4,4
..##??##????. 6,1
.???#?????#?? 5,1,1
??.????#?#???#? 1,7,1
.????#?.?.#??? 4,2
???.?????#?.??.?.? 1,5,1
??#??..???????.?.? 4,2
.#??#?##?????. 7,2
.?#?.#????? 1,5
.##.#?.#??? 2,1,2
????##???? 1,4,1
?#??#????#????.? 10,1
.?.???.?#?????#.. 1,7
#.??.?##..?.? 1,1,2,1
?#?.?####?#?????.??? 3,11
..#?###??.#.???.? 1,5,1,1,1
###???????.? 3,1,1,1
??#??.???###??#.?? 2,8
?#???###??????. 10,1,1
?#????#????.#??#.??# 1,1,1,2,4,1
.??###?#?.??? 1,5,1
???#.???###??#???#?# 1,1,15
#??.?.#???? 3,3
?#??????.??#???? 3,1,5
?????????#? 1,1,6
?#???.###??????#?.? 5,3,2,2,1
?...??.???# 2,1,1
?..???#?#? 1,1,1
.#????.?#?####??. 4,7
???#??.??#??? 6,3,1
...#?#.?##?. 3,2
.#.??.?#?.??.#. 1,1,2,1,1
???..???#?###.? 1,8
??#???.???? 2,2,3
.?.????#?#?#??#???? 10,1
.??.?.??####? 1,7
???..#??.?? 1,2,1
??.?.##???? 1,4
.???.##??###???.?.. 1,10
?.??..???.#.??#??? 1,1,3,1,1,4
?.?.??#.?? 1,1,2
??#??????...?#?##??. 3,4,5
.???#?????#?????? 10,1
???#???????????# 5,1,1,2,1
????#??#?.?.?? 9,1
?.??#??.???????#??. 2,10
??###?????.?# 1,6,1,1
??..?..?.???????#.?? 1,7
??????#????????.? 5,6
.#???????.#??..# 3,1,3,1
?.#?#????.#?? 3,1,2
????.??#???.?????#? 2,1,1,1,1,3
???#.??#?#?#?#????? 3,1,1,1,8
.##?????#????##?? 2,1,1,6
?#????????##??. 2,3,4,1
?#???????.? 1,4
?.???#?????##?#? 4,4
??#.???????#??#??. 1,1,9`;

console.log('part 1 result:', solvePart1(input));
console.log('part 2 result:', solvePart2(input));
