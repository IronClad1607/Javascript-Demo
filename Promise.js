function fakeDownload(done) {
    setTimeout(function () {
        let downloadedData = "some data we downloaded"
        done(downloadedData)
    }, 1000)
}

fakeDownload(function (data) {
    console.log("We downloaded a file, which had this data ->")
    console.log(data)
})

//Promises

function fakeDownloadPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            let downloadedData = "Some data from net"
            resolve(downloadedData)
        }, 1000)
    })
}

fakeDownloadPromise().then(function (data) {
    console.log("The data downloaded is ---> ")
    console.log()
})