let doWork = function (job, timer) {
    setTimeout(() => {
        console.log(`完成工作 ${job} at ${now.toISOString()}`, timer);
    });
};

let now = new Date();
console.log(`工作開始 at ${now.toISOString()}`);
doWork('刷牙', 3000);