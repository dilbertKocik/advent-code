const fs = require('fs');
const path = require('path');

const testData = ['[1518-11-01 00:00] Guard #10 begins shift', '[1518-11-01 00:05] falls asleep', '[1518-11-01 00:25] wakes up', '[1518-11-01 00:30] falls asleep', '[1518-11-01 00:55] wakes up', '[1518-11-01 23:58] Guard #99 begins shift', '[1518-11-02 00:40] falls asleep', '[1518-11-02 00:50] wakes up', '[1518-11-03 00:05] Guard #10 begins shift', '[1518-11-03 00:24] falls asleep', '[1518-11-03 00:29] wakes up', '[1518-11-04 00:02] Guard #99 begins shift', '[1518-11-04 00:36] falls asleep', '[1518-11-04 00:46] wakes up', '[1518-11-05 00:03] Guard #99 begins shift', '[1518-11-05 00:45] falls asleep', '[1518-11-05 00:55] wakes up'];

const readData = fileName => fs.readFileSync(path.join(__dirname, fileName), 'utf8').split('\n');

const transformTime = timeLog => {
    const hour = Number(timeLog.slice(0, 2));
    const minute = (hour === 23) ? 0 : Number(timeLog.slice(3, 5));
    return { hour, minute };
}

const processLogMsg = (logMsg, guard, previousGuardID, commands) => {
    const logInfo = logMsg.split(' ');
    const date = logInfo[0].replace('[', '');
    const time = transformTime(logInfo[1]);
    const command = commands.indexOf(logInfo[2]);
    const guardID = (command === guard) ? Number(logInfo[3].replace('#', '')) : previousGuardID;
    return { date, time, command, guardID };
}

const transformData = data => {
    const guard = 0;
    const falls = 1;
    const wakes = 2;
    const commands = ['Guard', 'falls', 'wakes'];
    let guardData = [];
    let previousGuardID = -1;
    data.sort().map(logMsg => {
        const { date, time, command, guardID } = processLogMsg(logMsg, guard, previousGuardID, commands);
        previousGuardID = guardID;
        const guardIndex = guardData.findIndex(guard => guard.guardID === guardID);

        if (guardIndex === -1) {
            guardData.push({ sleepLogs: [] , guardID });
            return;
        }
        if (command === falls) {
            guardData[guardIndex].sleepLogs.push({ date, startTime: time });
        } else if (command === wakes) {
            const lastLogIndex = guardData[guardIndex].sleepLogs.length - 1;
            guardData[guardIndex].sleepLogs[lastLogIndex].endTime = time;
        }
    });

    return guardData;
};

const getSleepTimeCount = guard => {
    guard.sleepTimeCount = new Array(60).fill(0);
    guard.sleepLogs.map(log => {
        for(let i = log.startTime.minute; i < log.endTime.minute; i++) {
            guard.sleepTimeCount[i]++;
        }
    })
    return guard
};

const getMaxTimeCount = guard => {
    const timeCounts = guard.sleepTimeCount.entries();
    guard.maxTimeAsleep = 0;
    guard.maxTimeCount = [-1, -1];
    for(let timeCount = timeCounts.next(); !timeCount.done; timeCount = timeCounts.next()) {
        guard.maxTimeAsleep += timeCount.value[1];
        if (timeCount.value[1] > guard.maxTimeCount[1]) {
            guard.maxTimeCount = timeCount.value;
        }
    }
    return guard;
};

const findConsistentlySleepGuard = data => {
    const guardData = transformData(data);
    const guardDataWithSleepTimeCount = guardData.map(getSleepTimeCount);
    const guardDataWithMaxSleepTimeCount = guardDataWithSleepTimeCount.map(getMaxTimeCount);
    const bestGuard = guardDataWithMaxSleepTimeCount.reduce((previousGuard, guard) => (guard.maxTimeCount[1] < previousGuard.maxTimeCount[1]) ? previousGuard : guard);
    return bestGuard;
}

// const consistentlySleepyGuard = findConsistentlySleepGuard(testData);
const consistentlySleepyGuard = findConsistentlySleepGuard(readData('testData.txt'));

console.log('Best guard id multiplied by minute', consistentlySleepyGuard.guardID * consistentlySleepyGuard.maxTimeCount[0]);