'use strict';
exports.handler = (event, context, callback) => {
    var AWS = require('aws-sdk');
    var s3 = new AWS.S3();
    var params = {
        Bucket: event.Records[0].s3.bucket.name,
        CopySource: "/" + event.Records[0].s3.bucket.name + "/" + event.Records[0].s3.object.key,
        Key: event.Records[0].s3.object.key.replace(/index.html$/g, '')
    };
    s3.copyObject(params, function(err, data) {
        if (err) {
            console.log(err, err.stack);
        }
    });
};
