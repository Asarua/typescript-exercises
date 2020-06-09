# 第六题

这道题主要是考察泛型的应用。

``` javascript
function swap(v1: any, v2: any): any {
    return [v2, v1];
}
```

anyScript 当然能解决这个问题hhh

``` javascript
function swap<T, G>(v1: T, v2: G): [G, T] {
    return [v2, v1];
}
```
