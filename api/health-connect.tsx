import {
  initialize,
  requestPermission,
  readRecords,
  readRecord,
} from "react-native-health-connect";

export const readSampleData = async () => {
  try {
    // initialize the client
    const isInitialized = await initialize();

    // request permissions
    // const res = await requestPermission([
    //   {
    //     accessType: "read",
    //     recordType: "Steps",
    //   },
    // ]);
    // console.log({ res });
    // check if granted
    // const result = await readRecords("Steps", {
    //   timeRangeFilter: {
    //     startTime: "2023-06-01T12:00:00.405Z",
    //     operator: "after",
    //   },
    // });
    // console.log({ result });
    //   {
    //   result: [
    //     {
    //       startTime: '2023-01-09T12:00:00.405Z',
    //       endTime: '2023-01-09T23:53:15.405Z',
    //       energy: {
    //         inCalories: 15000000,
    //         inJoules: 62760000.00989097,
    //         inKilojoules: 62760.00000989097,
    //         inKilocalories: 15000,
    //       },
    //       metadata: {
    //         id: '239a8cfd-990d-42fc-bffc-c494b829e8e1',
    //         lastModifiedTime: '2023-01-17T21:06:23.335Z',
    //         clientRecordId: null,
    //         dataOrigin: 'com.healthconnectexample',
    //         clientRecordVersion: 0,
    //         device: 0,
    //       },
    //     },
    //   ],
    // }
    console.log("EOF");
  } catch (error) {
    throw new Error("The health connect doesnt seem to be installed");
  }
};
