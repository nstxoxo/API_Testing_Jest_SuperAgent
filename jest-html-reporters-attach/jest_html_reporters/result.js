window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":2,"numPassedTestSuites":0,"numPassedTests":5,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":7,"startTime":1656949548441,"success":false,"testResults":[{"leaks":false,"numFailingTests":2,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1656949553810,"runtime":5280,"slow":true,"start":1656949548530},"skipped":false,"testFilePath":"D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\test.spec.ts","testResults":[{"ancestorTitles":["make API request"],"duration":335,"failureDetails":[],"failureMessages":[],"fullName":"make API request Test GET LIST USERS","invocations":1,"location":null,"numPassingAsserts":0,"retryReasons":[],"status":"passed","title":"Test GET LIST USERS"},{"ancestorTitles":["make API request"],"duration":369,"failureDetails":[],"failureMessages":[],"fullName":"make API request Test GET SINGLE USER","invocations":1,"location":null,"numPassingAsserts":0,"retryReasons":[],"status":"passed","title":"Test GET SINGLE USER"},{"ancestorTitles":["make API request"],"duration":339,"failureDetails":[],"failureMessages":[],"fullName":"make API request Test GET SINGLE USER NOT FOUND","invocations":1,"location":null,"numPassingAsserts":0,"retryReasons":[],"status":"passed","title":"Test GET SINGLE USER NOT FOUND"},{"ancestorTitles":["make API request"],"duration":314,"failureDetails":[],"failureMessages":[],"fullName":"make API request Test GET SINGLE <RESOURCE> NOT FOUND","invocations":1,"location":null,"numPassingAsserts":0,"retryReasons":[],"status":"passed","title":"Test GET SINGLE <RESOURCE> NOT FOUND"},{"ancestorTitles":["make API request"],"duration":780,"failureDetails":[],"failureMessages":[],"fullName":"make API request Test POST CREATE","invocations":1,"location":null,"numPassingAsserts":0,"retryReasons":[],"status":"passed","title":"Test POST CREATE"},{"ancestorTitles":["make API request"],"duration":753,"failureDetails":[{}],"failureMessages":["TypeError: Cannot read properties of undefined (reading 'statusCode')\n    at D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\test.spec.ts:76:20\n    at Generator.throw (<anonymous>)\n    at rejected (D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\test.spec.ts:6:65)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"make API request Test PUT UPDATE","invocations":1,"location":null,"numPassingAsserts":0,"retryReasons":[],"status":"failed","title":"Test PUT UPDATE"},{"ancestorTitles":["make API request"],"duration":763,"failureDetails":[{}],"failureMessages":["TypeError: Cannot read properties of undefined (reading 'status')\n    at D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\test.spec.ts:91:20\n    at Generator.throw (<anonymous>)\n    at rejected (D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\test.spec.ts:6:65)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)"],"fullName":"make API request Test PATCH UPDATE","invocations":1,"location":null,"numPassingAsserts":0,"retryReasons":[],"status":"failed","title":"Test PATCH UPDATE"}],"failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mmake API request › Test PUT UPDATE\u001b[39m\u001b[22m\n\n    TypeError: Cannot read properties of undefined (reading 'statusCode')\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 74 |\u001b[39m             console\u001b[33m.\u001b[39mlog(err\u001b[33m.\u001b[39mmessage)\u001b[33m;\u001b[39m \u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 75 |\u001b[39m         } \u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 76 |\u001b[39m         expect(res\u001b[33m.\u001b[39mstatusCode)\u001b[33m.\u001b[39mtoEqual(\u001b[35m200\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 77 |\u001b[39m         expect(res\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mtoEqual(expectedObjPut\u001b[33m.\u001b[39mname)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 78 |\u001b[39m         expect(res\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mjob)\u001b[33m.\u001b[39mtoEqual(expectedObjPut\u001b[33m.\u001b[39mjob)\u001b[33m;\u001b[39m        \u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 79 |\u001b[39m     })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2m\u001b[0m\u001b[36mtest.spec.ts\u001b[39m\u001b[0m\u001b[2m:76:20\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m          at Generator.throw (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat rejected (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtest.spec.ts\u001b[39m\u001b[0m\u001b[2m:6:65)\u001b[22m\u001b[2m\u001b[22m\n\n\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mmake API request › Test PATCH UPDATE\u001b[39m\u001b[22m\n\n    TypeError: Cannot read properties of undefined (reading 'status')\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 89 |\u001b[39m             console\u001b[33m.\u001b[39mlog(err\u001b[33m.\u001b[39mmessage)\u001b[33m;\u001b[39m \u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 90 |\u001b[39m         } \u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 91 |\u001b[39m         expect(res\u001b[33m.\u001b[39mstatus)\u001b[33m.\u001b[39mtoBe(\u001b[35m200\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                    \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 92 |\u001b[39m         expect(res\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mname)\u001b[33m.\u001b[39mtoEqual(expectedObjPut\u001b[33m.\u001b[39mname)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 93 |\u001b[39m         expect(res\u001b[33m.\u001b[39mbody\u001b[33m.\u001b[39mjob)\u001b[33m.\u001b[39mtoEqual(expectedObjPut\u001b[33m.\u001b[39mjob)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 94 |\u001b[39m         console\u001b[33m.\u001b[39mlog(res\u001b[33m.\u001b[39mbody)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat \u001b[22m\u001b[2m\u001b[0m\u001b[36mtest.spec.ts\u001b[39m\u001b[0m\u001b[2m:91:20\u001b[22m\u001b[2m\u001b[22m\n\u001b[2m          at Generator.throw (<anonymous>)\u001b[22m\n\u001b[2m      \u001b[2mat rejected (\u001b[22m\u001b[2m\u001b[0m\u001b[36mtest.spec.ts\u001b[39m\u001b[0m\u001b[2m:6:65)\u001b[22m\u001b[2m\u001b[22m\n"}],"wasInterrupted":false,"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\node_modules\\jest-html-reporters\\index.js",{}]],"rootDir":"D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent","runTestsByPath":false,"skipFilter":false,"testFailureExitCode":1,"testPathPattern":"","testSequencer":"D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true},"endTime":1656949553823,"_reporterOptions":{"publicPath":"D:\\anastasia_mardovich QA_JS_01\\API_Testing_Jest_SuperAgent","filename":"jest_html_reporters.html","expand":false,"pageTitle":"","hideIcon":false,"testCommand":"npx jest","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false},"attachInfos":{}})