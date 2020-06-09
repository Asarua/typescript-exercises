# 第9题

这道题有点难。它需要你完成一个函数，传入旧的函数可以返回一个可以 promise 调用的新函数。

```javascript
function promisify<T>(fn: (callback: (response: ApiResponse<T>) => void) => void): () => Promise<T> {
    return () => new Promise((resolve, reject) => {
        fn(res => {
            if (res.status === 'success') {
                resolve(res.data)
            } else {
                reject(res.error)
            }
        })
    })
}
```