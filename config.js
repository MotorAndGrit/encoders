module.exports = {
    version: "0.8.0",
    port: process.env.PORT || 5000,
    cors: process.env.CORSVAR || 'http://localhost:3000',
    maxEncodedDuration: 600,
    // pathLongTerm: "/mnt/merge/raw/",
    pathLongTerm: "./longtermstore/",
    onlyHash: false
}