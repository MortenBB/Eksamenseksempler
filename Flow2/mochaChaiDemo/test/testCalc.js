const expect = require("chai").expect
const calc = require("../calc")
const fetch = require("node-fetch")
const port = 4000
const url = `http://localhost:${port}/api/calc/add/`
let server


describe("test", function () {

    describe("testing the very basic calc api", function () {
        it("should return 8", function () {
            const res = calc.add(5, 3)
            expect(res).to.be.equal(8)
        })
    })
    describe("testing the rest calc api", function () {
        before(function (done) {
            calc.calcServer(port, function (s) {
                server = s
                done()
            })
        })
        after(function () {
            server.close()
        })
        it("Should return 8 from 5+3", async function () {
            const res2 = await fetch(url + "5/3").then(r => r.text())
            expect(res2).to.be.equal("8")
        })
    })
})