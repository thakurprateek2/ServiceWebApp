var generateDummyData = function(){
    var sampleArray = {};
    for (let index = 0; index < 10; index++) {
                
        var newKey = firebase.database().ref().child('attendance').push().key;
        var sample = {
            "engineerId" : "-L5TRSNNbiqwgczvCtV0",
            "engineerId_time" : "-L5TRSNNbiqwgczvCtV0_1523428207753",
            "id" : "-L9nOPgD6HgFiWJWX4N4",
            "latitude" : 19.1735685,
            "longitude" : 73.0698576,
            "name" : "some engg",
            "time" : 1523428207753,
            "type" : "IN"
        }

        sample.time = sample.time + (1000*60*60*24*(index + 1));
        sample.engineerId_time = sample.engineerId + '_' +  sample.time;
        sampleArray[newKey] = sample;
        

        var sample2 = {
            "engineerId" : "-L5TRSNNbiqwgczvCtV0",
            "engineerId_time" : "-L5TRSNNbiqwgczvCtV0_1523428207753",
            "id" : "-L9nOPgD6HgFiWJWX4N4",
            "latitude" : 19.1735685,
            "longitude" : 73.0698576,
            "name" : "some engg",
            "time" : 1523428207753,
            "type" : "IN"
        }

        var newKey2 = firebase.database().ref().child('attendance').push().key;
        

        sample2.time = sample2.time + (1000*60*60*24*(index + 1)) + (1000*60*60*8);
        sample2.engineerId_time = sample2.engineerId + '_' +  sample2.time;
        sampleArray[newKey2] = sample2;
    }

    return sampleArray;
}