const mergeRanges = (meetings) => {
  const sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime);
  const mergedMeetings = [sortedMeetings[0]];
  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];
    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(
        lastMergedMeeting.endTime,
        currentMeeting.endTime,
      );
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }
  return mergedMeetings;
};
