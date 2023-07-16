import { setOutput, getInput } from "@actions/core";
import { exec } from "@actions/exec";
const run = () => {
    const bucket = getInput('bucket', { required: true })
    const bucketRegion = getInput('bucket-region', { required: true })
    const distFolder = getInput('dist-folder', { required: true })
    exec(`aws s3 sync ${distFolder} s3://${bucket} --region ${bucketRegion}`)
    
    setOutput('website-url', `${bucket}.s3-website-${bucketRegion}.amazonaws.com`)
}

run();