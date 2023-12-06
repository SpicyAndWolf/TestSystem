async function test() {
    setTimeout(() => {
        console.log("延迟了1秒")
    }, 1000)
    setTimeout(() => {
        console.log("延迟了0.5秒")
    }, 0.5)
    let a = 10
    a = a + 5
    console.log("异步内部")
    return a;
}

// test()
console.log(test())
console.log("先执行")