# Notes

There's a waiting room with N chairs set in single row. Chairs are consecutively numbered from 1 to N. First is closest to the entrance (which is exit as well).

For some reason people choose a chair in the following way

1.Find a place as far from other people as possible
2.Find a place as close to exit as possible
All chairs must be occupied before the first person will be served

So it looks like this for 10 chairs and 10 patients

Chairs	    1	2	3	4	5	6	7	8	9	10
Patients	1	7	5	8	3	9	4	6	10	2
Your task is to find last patient's chair's number.

Input: number of chairs N, an integer greater than 2.
Output: a positive integer, the last patient's chair number.

## Legend
- ⚠ TODO
- 🚧 IN PROGRESS
- ✅ DONE

## Plans

Pomodoro 1 
- First refactor
- User Stories
- Story 1: When user pass wrong input, it should throw an exception
- ✅ UAT1.1: When given [], it should throw an exception
- ✅ UAT1.2: When given true, it should throw an exception
- ✅ UAT1.3: When given 0, it should throw an exception
- ✅ UAT1.4: When given 1, it should throw an exception

Story 2: When user pass higher number than 2, it should return the last patient's chair number
- ✅ UAT2.1: When user pass 2, it should return 2

Pomodoro 2
- ✅ UAT2.2: When user pass 3, it should return 2
- ✅ UAT2.3: When user pass 4, it should return 3
- 🚧 UAT2.4: When user pass 5, it should return 4

Pomodoro 3
- ✅ UAT2.4: When user pass 5, it should return 4
