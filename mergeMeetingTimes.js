/* Your company built an in-house calendar tool
called HiCal. Y ou want to add a feature to see the
times in a day when everyone is available

To do this, you'll need to know when any team is having a meeting. In HiCal, a meeting
is stored as a tuple of integers (start_time, end_time). These integers represent the
number of 30-minute blocks past 9:00am

For example:
(2, 3) # meeting from 10:00 - 10:30pm
(6, 9) # meeting from 12:00 - 1:30pm

Write a function condense_meeting_times() that takes an array of meeting time ranges
and returns an array of condensed ranges.

For example, given:
[(0, 1), (3, 5), (4, 8), (10, 12), (9, 10)]

your function would return:
[(0, 1), (3, 8), (9, 12)] */

const mergeRanges = meetings => {
  // sort by start times, breaking ties with end times
  let sortedMeetings = meetings.sort( (a, b) => a[0] - b[0]);
  // meetings only go in merged_meetings when we're sure they can't be merged furhter
  let mergedMeetings = [];

  let previousMeetingStart = sortedMeetings[0][0];
  let previousMeetingEnd = sortedMeetings[0][1];

  for (let i = 0; i < sortedMeetings.length; i++) {
    let currentMeeting = sortedMeetings[i];
    let currentMeetingStart = currentMeeting[0];
    let currentMeetingEnd = currentMeeting[1];
    // if the previous meeting can be merged with the current one
    // that is, if current meeting starts before previous meeting ends:
    if (currentMeetingStart <= previousMeetingEnd) {
      // merge the current_meeting back into the previous meeting
      // and keep the resulting meeting as the previous meeting
      // because this newly-merged meeting might still
      // need to be merged with the next meeting
      previousMeetingEnd = Math.max(currentMeetingEnd, previousMeetingEnd);
    } else {
      // else the previous meeting can't be merged with anythign else
      // put it in merged_meetings
      // and move on to trying to merge the current meeting into subsequent meetings
      mergedMeetings.push([previousMeetingStart, previousMeetingEnd]);
      previousMeetingStart = currentMeetingStart;
      previousMeetingEnd = currentMeetingEnd;
    }
  }
  // put last meeting we were trying to merge in our final set
  mergedMeetings.push([previousMeetingStart, previousMeetingEnd]);
  return mergedMeetings;
};

const example = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]];

console.log(mergeRanges(example));
